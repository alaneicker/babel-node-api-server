import mongoose from 'mongoose';
import { Contacts } from './schemas';

mongoose.connect('mongodb://heroku_r4qz545d:hsf22of5ae7mq0lk655m2kbu65@ds115963.mlab.com:15963/heroku_r4qz545d');

export const getContacts = () => {
  return Contacts.find();
};

export const getContactById = id => {
  return Contacts.findOne({ id });
};

export const getContactByName = name => {
  let query = {
    'name.first': { $regex: new RegExp(name.first_name, 'i') },
    'name.last': { $regex: new RegExp(name.last_name, 'i') },
  };

  if (name.mi !== null) {
    query['name.mi'] = { $regex: new RegExp(name.mi, 'i') };
  }

  return Contacts.findOne(query);
};