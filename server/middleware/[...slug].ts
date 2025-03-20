/* export default  (req, res, next) => {
    console.log(req.url);
    const headers = req.headers;
    res.redirect("https://animalofficial.info"+req.url);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        res.redirect("https://animalofficial.info"+req.url);
    } else {
        next();
    }
};
 */

export default defineEventHandler((event) => {
    const headers = event.req.headers;
    
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,"https://animalofficial.info"+event.req.url);
    }
})