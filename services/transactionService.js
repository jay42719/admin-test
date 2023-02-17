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
    
  }

  async getReportByCategory(){
    
  }
}

module.exports = new transactionService();
