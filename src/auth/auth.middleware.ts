import { NextFunction, Request, Response } from "express";
import { JWTGenerator } from "../config";
import { UserSchema } from "../db";
import { UserEntity } from "../model/user.entity";

export class AuthMiddleware {

    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const authorization = req.header('Authorization');

        if (!authorization) throw 'No authorized.'
        if (!authorization.startsWith('Bearer ')) return res.status(401);
        const token = authorization.split(' ')[1];

        try {

            const payload = await JWTGenerator.validateToken<{ id: string }>(token);

            if (!payload) return res.status(401);

            const user = await UserSchema.findOne({ _id: payload });

            if (!user) return res.status(404);

            req.body.user = UserEntity.fromObject(user);

            next();

        } catch {
            return res.status(500)
        }

    }

}