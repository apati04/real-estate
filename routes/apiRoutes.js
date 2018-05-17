const keys = require('../config/keys');
const axios = require('axios');
const { parseString } = require('xml2js');
const { promisify } = require('es6-promisify');

const xml2JsPromise = promisify(parseString);
module.exports = app => {
  app.get('/api/zDeepSearchResults', async (req, res) => {
    /**
     *      address: '2750 Kelvin Ave',
          citystatezip: 'Irvine, CA 92614'
          business district
     */
    const { address, citystatezip } = req.params;
    const xml = await axios.get(
      'https://www.zillow.com/webservice/GetDeepSearchResults.htm?',
      {
        params: {
          'zws-id': keys.zillowKey,
          address: '4455 Casa Grande Cir',
          citystatezip: 'cypress,ca 90630'
        }
      }
    );

    const { 'SearchResults:searchresults': zResult } = await xml2JsPromise(
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

    if (zResult.message.code !== '0') {
      return res.send(zResult.message.code);
    }
    const zObj = zResult.response.results.result;
    res.send(zObj);
    // res.send(zRes);
    // const images = await axios.get(
    //   'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm',
    //   {
    //     params: {
    //       'zws-id': keys.zillowKey,
    //       zpid: zObj.zpid
    //     }
    //   }
    // );
  });
};
