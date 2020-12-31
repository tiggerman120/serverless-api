'use strict';
const uuid = require('uuid').v4;
const mugsModel = require('./mug.schema');

exports.handler = async (event) => {
  const {capacity, color, dropable} = JSON.parse(event.body);

  const id = uuid();

  try {
    const record = new mugsModel({ id, capacity, color, dropable });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};