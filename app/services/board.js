import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function BoardService() {

    const Board = db.Board
    const dbo = getDatabase()
    const dbConnect = dbo.getDb();

    return {
        write(req, _res) {
            new Board(req.body).save(() => {
                return 'ok'
            })
        },
        list(req, res) {
            Board
                .find()
                .exec((err, boards) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    return boards
                })
        }
    } // return
}
