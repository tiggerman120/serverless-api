'use strict';

const mugsModel = require('./mug.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  if (!id) {
    return {
      statusCode: 500,
      response: 'gimme an id',
    };
  }

  try {
    const data = await mugsModel.delete({'id': id});
    console.log('__deleted__', data);
    return {
      statusCode: 200,
      body: 'mugs gone bye',
    };
  }
  catch (e) {
    console.log('__error__', e);
    return {
      statuscode: 500,
      response: e.message,
    };
  }
};
