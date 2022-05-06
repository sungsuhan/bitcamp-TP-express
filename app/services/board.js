import db from '../models/index.js'

export default function BoardService() {
    const Board = db.board
    return {
        write(req, _res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
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
