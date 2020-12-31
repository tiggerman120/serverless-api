'use strict';

const xmodel = require('./mug.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);

  try {
    let data;
    if (id) {
      const list = await xmodel.query('id').eq(id).limit(1).exec();
      data = list;
    } else {
      data = await xmodel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e),
    };
  }
};
