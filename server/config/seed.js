/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Tile from '../components/tiles/tile.model';
import User from '../api/user/user.model';

Tile.find({}).remove()
    .then(() => {
        Tile.create({
            q: 0,
            r: 0,
            t: 'GRASS_DRY',
            o: 'NONE'
        }, {
            q: 1,
            r: 0,
            t: 'GRASS_DRY',
            o: 'NONE'
        });
    });

User.find({}).remove()
    .then(() => {
        User.create({
                provider: 'local',
                name: 'Test User',
                email: 'test@test.com',
                password: 'test'
            }, {
                provider: 'local',
                role: 'admin',
                name: 'Admin',
                email: 'admin@admin.com',
                password: 'admin'
            })
            .then(() => {
                console.log('finished populating users');
            });
    });
