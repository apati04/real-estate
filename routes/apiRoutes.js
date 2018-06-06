const keys = require("../config/keys");
const axios = require("axios");
const { parseString } = require("xml2js");
const { promisify } = require("es6-promisify");
const mongoose = require("mongoose");
const Building = mongoose.model("Building");

const xml2JsPromise = promisify(parseString);
module.exports = app => {
  app.get("/api/zDeepSearchResults", async (req, res) => {
    const { address, citystatezip } = req.query;
    const xml = await axios.get(
      "https://www.zillow.com/webservice/GetDeepSearchResults.htm?",
      {
        params: {
          "zws-id": keys.zillowKey,
          address,
          citystatezip
        }
      }
    );

    const { "SearchResults:searchresults": zResult } = await xml2JsPromise(
      xml.data,
      {
        normalize: true,
        noralizeTags: true,
        firstCharLowerCase: true,
        stripPrefix: true,
        explicitArray: false,
        mergeAttrs: true,
        trim: true
      }
    );

    if (zResult.message.code !== "0") {
      return res.send(zResult.message.code);
    }
    const zObj = zResult.response.results.result;
    res.send(zObj);
  });
  app.get("/api/validateLocation", async (req, res, next) => {
    const { street, citystatezip } = req.query;
    const validateSearch = await axios.get(
      "https://www.zillow.com/webservice/GetDeepSearchResults.htm",
      {
        params: {
          "zws-id": keys.zillowKey,
          address: street,
          citystatezip
        }
      }
    );
    const { "SearchResults:searchresults": zResult } = await xml2JsPromise(
      validateSearch.data,
      {
        normalize: true,
        noralizeTags: true,
        firstCharLowerCase: true,
        stripPrefix: true,
        explicitArray: false,
        ignoreAttrs: true,
        trim: true
      }
    );
    console.log("serverResult: ", zResult);
    if (Object.keys(zResult).includes("response")) {
      const {
        zpid,
        address: { longitude, latitude }
      } = zResult.response.results.result;
      res.send({ zpid, longitude, latitude });
    } else {
      res.send(zResult.message);
    }
    next();
  });
  app.get("/api/mapSearch", (req, res) => {
    const { location } = req.query;
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`,
        {
          params: {
            access_token: keys.mapboxToken,
            country: "us",
            types: "address"
          }
        }
      )
      .then(({ data }) => {
        if (data.features.length > 0) {
          const features = data.features[0];
          const [address, city, statezip, country] = features.place_name.split(
            ", "
          );
          return {
            status: 200,
            payload: { address, citystatezip: `${city}, ${statezip}` },
            features
          };
        }
        return {
          payload: { error: "Location cannot be found" },
          status: 404,
          features: []
        };
      })
      .then(async ({ status, payload, features }) => {
        if (status === 404) {
          return res.send({ status, message: "noob", payload });
        }
        const zillowRes = await axios.get(
          "https://www.zillow.com/webservice/GetDeepSearchResults.htm",
          {
            params: {
              "zws-id": keys.zillowKey,
              address: payload.address,
              citystatezip: payload.citystatezip
            }
          }
        );
        const { "SearchResults:searchresults": zResult } = await xml2JsPromise(
          zillowRes.data,
          {
            normalize: true,
            noralizeTags: true,
            firstCharLowerCase: true,
            stripPrefix: true,
            explicitArray: false,
            ignoreAttrs: true,
            trim: true
          }
        );
        if (parseInt(zResult.message.code) !== 0) {
          return res.send({ payload: { error: zResult.message } });
        }
        const zd = zResult.response.results.result;
        const updatedSearch = await axios.get(
          "https://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm",
          {
            params: {
              "zws-id": keys.zillowKey,
              zpid: zd.zpid
            }
          }
        );
        const {
          "UpdatedPropertyDetails:updatedPropertyDetails": isUpdated
        } = await xml2JsPromise(updatedSearch.data, {
          normalize: true,
          noralizeTags: true,
          firstCharLowerCase: true,
          stripPrefix: true,
          explicitArray: false,
          ignoreAttrs: true,
          trim: true
        });
        let image;
        if (
          parseInt(isUpdated.message.code) === 0 &&
          isUpdated.response.images
        ) {
          image = isUpdated.response.images.image;
        } else {
          image = {
            url: "http://via.placeholder.com/300/4298f4/e7e7e7?text=No+Image"
          };
        }
        const finalObj = {
          zpid: zd.zpid,
          image,
          type: zd.useCode,
          fullAddress: features.place_name,
          address: zd.address,
          location: {
            center: features.center,
            geometry: features.geometry
          },
          yearBuilt: zd.yearBuilt,
          rooms: {
            bathrooms: zd.bathrooms,
            bedrooms: zd.bedrooms,
            total: zd.totalRooms
          },
          lotSize: {
            value: zd.lotSizeSqFt,
            unit: "SqFt"
          },
          finishedSize: {
            value: zd.finishedSqFt,
            unit: "SqFt"
          },
          links: zd.links,
          financials: {
            taxAssessment: {
              year: zd.taxAssessmentYear,
              amount: zd.taxAssessment
            }
          },
          zestimate: zd.zestimate,
          localRealEstate: zd.localRealEstate
        };
        res.send(finalObj);
      });
  });
};
