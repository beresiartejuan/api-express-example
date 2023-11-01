/**
 * @param {Response} res 
 */
export default function HomeController(_, res) {

    return res.send("<p>Api in <code>/api</code></p>");

}