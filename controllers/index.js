/**
 * Created by bin.shen on 21/03/2017.
 */

const router = require('koa-router')();

router.get('/', require('../controllers/test').index);
router.get('/test', require('../controllers/test').test);

module.exports = router;