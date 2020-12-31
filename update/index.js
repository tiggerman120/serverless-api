'use strict';

const mugsModel = require('./mug.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const { capacity, color, dropable } = JSON.parse(event.body);

  if (!id) {
    return {
      statusCode: 500,
      response: 'gimme an id',
    };
  }

  try {
    let saveObject = {
      capacity, 
      color, 
      dropable,
    };
    const data = await mugsModel.update({'id': id}, saveObject);

    return {
      statusCode: 200,
      body:JSON.stringify(data),
    };
  } catch (e) {
    console.log('__error__', e);
    return {
      statusCode: 500, response: e.message,
    };
  }
};