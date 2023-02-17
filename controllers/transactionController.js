const moment = require("moment-timezone")
const {
    transactionService
} = require("../services");

class transactionController {
    async createTransaction(req, res, next) {
        try {
            const {
                body
            } = req;
            body.date_time = +new Date(body.date_time);
            const transaction = await transactionService.create(body);

            return res.send({
                data: transaction
            });
        } catch (error) {
            console.log("error", error);
        }
    }
    async getAllTransaction(req, res, next) {
        try {
            const {
                query
            } = req;
            console.log(query)
            const where = {};
            if (query.category) {
                where.category = category;
            }
            if (query.type) {
                where.type = type;
            }
            if (query.to && query.from) {
                if (query.to === query.from) {
                    where.date_time = {
                        $gte: +new Date(query.from),
                        $lte: +moment(query.to).endOf('day')
                    }
                } else {
                    where.date_time = {
                        $gte: +new Date(query.from),
                        $lte: +new Date(query.to)
                    }
                }
            }
            if (query.filterBy) {
                switch (query.filterBy) {
                    case 'today':
                        where.date_time = {
                            $gte: + moment().startOf('day'),
                            $lte: + moment().endOf('day')
                        }
                        break;
                    case 'yesterday':
                        where.date_time = {
                            $gte: + moment().subtract(1, "days").startOf('day'),
                            $lte: + moment().subtract(1, "days").endOf('day')
                        }
                        break;
                    case 'this_month':
                        where.date_time = {
                            $gte: + moment().startOf('month'),
                            $lte: + moment().endOf('month')
                        }
                        break;
                    case 'last_month':
                        where.date_time = {
                            $gte: + moment().subtract(1, "months").startOf('month'),
                            $lte: + moment().subtract(1, "months").endOf('month')
                        }
                        break;
                }
            }
            console.log(where)
            const transaction = await transactionService.getAllTransactions(where);
            for(let i in transaction){
                transaction[i].date_time = moment(transaction[i].date_time).format('YYYY-MM-DD HH:mm:ss')
            }
            return res.send({
                data: transaction
            });
        } catch (error) {
            console.log("error", error);
        }
    }
}

module.exports = new transactionController();