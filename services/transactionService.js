const transactionModel = require("../models/transactionModel");

class transactionService {
  async create(model) {
    return transactionModel.create(model);
  }

  async getOneTransaction(where) {
    return transactionModel.findOne(where);
  }

  async getTransactionById(id) {
    return transactionModel.findById(id);
  }

  async update(id, model) {
    return transactionModel.findByIdAndUpdate(id, model);
  }

  async remove(id) {
    return transactionModel.findOneAndRemove(id);
  }

  async getAllTransactions(where = {}) {
    return transactionModel.find(where, {}, {lean: true});
  }

  async getReportDebitTypeTransactionMonthWise(){

  }

  async getReportByType(){
    const pipeline = [
      { 
          "$group" : {
              "_id" : null, 
              "total" : {
                  "$sum" : 1.0
              }, 
              "EXPANSE" : {
                  "$sum" : {
                      "$cond" : [
                          {
                              "$eq" : [
                                  "$type", 
                                  "EXPANSE"
                              ]
                          }, 
                          1.0, 
                          0.0
                      ]
                  }
              }, 
              "INCOME" : {
                  "$sum" : {
                      "$cond" : [
                          {
                              "$eq" : [
                                  "$type", 
                                  "INCOME"
                              ]
                          }, 
                          1.0, 
                          0.0
                      ]
                  }
              }
          }
      }, 
      { 
          "$project" : {
              "total" : 1.0, 
              "EXPANSE" : 1.0, 
              "INCOME" : 1.0, 
              "PERCENTAGE_EXPANSE" : {
                  "$multiply" : [
                      {
                          "$divide" : [
                              "$EXPANSE", 
                              "$total"
                          ]
                      }, 
                      100.0
                  ]
              }, 
              "PERCENTAGE_INCOME" : {
                  "$multiply" : [
                      {
                          "$divide" : [
                              "$INCOME", 
                              "$total"
                          ]
                      }, 
                      100.0
                  ]
              }
          }
      }
  ];
    return transactionModel.aggregate(pipeline);
  }

  async getReportByCategory(){
    
  }
}

module.exports = new transactionService();
