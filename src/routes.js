const {Router} = require('express');
const router = Router();
router.get('/',(req,res)=>{
    res.send("am on route page");
})
module.exports = router;