import { Request, Response , NextFunction } from "express";


function asyncWrapper(fn: any ) {
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(fn(req, res))
        .then((result: any) => res.json(result))
        .catch((err) => next(err))
    }
}

export default asyncWrapper;