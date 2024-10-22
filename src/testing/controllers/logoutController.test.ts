import { logoutController } from '../../controllers/authControllers'
import request from 'supertest'

import express from 'express'
import authRoutes from '../../routes/authRoutes'
import { expect } from 'chai';

const app: express.Application = express();
app.use(express.json());
app.use('/auth',authRoutes);

describe("user can logout of a session", ()=>{
    let cookie: string;

    beforeEach(async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({email: 'will@zubi.com', password: 'ww'});

        expect(res.status).to.equal(200);
        cookie = res.headers['set-cookie'][0];
    });

    it("should logout the user if they're authenticated", async ()=>{
        const res = await request(app)
            .post('/auth/logout')
            .set('Cookie', cookie)
            .expect(200);
        
        expect(res.body.message).to.equal("Successfully logged out");
    })

    it("should clear the cookie", async ()=>{
        const res = await request(app)
            .post('/auth/logout')
            .set('Cookie', cookie)
            .expect(200);
        
            expect(res.body.message).to.equal("Successfully logged out");

            const clearedCookie = res.headers['set-cookie'][0];

            expect(clearedCookie).to.include('connect.sid=;');
            expect(clearedCookie).to.include('Expires=');
            expect(clearedCookie).to.include('HttpOnly')
    })

    it("should destroy the session if a session with the user exists", ()=> {

    })

    it("should return the user is unauthenticated after logging out and session destroyed", async ()=>{
        await request(app)
            .post('/auth/logout')
            .set('Cookie', cookie)
            .expect(200)
        
        const res = await request(app)
            .post('/auth/logout')
            .set('Cookie', cookie)
            .expect(401);
        
            expect(res.body.message).to.equal('Error logging out, user is not authenticated.')
    })
})
