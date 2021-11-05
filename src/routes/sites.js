var express = require("express");
var router = express.Router();
const sitesControllers = require("../app/controllers/SitesControllers");
router.get("/getAllProduct", sitesControllers.index);
router.get(
  "/product_detail/productId=:productId",
  sitesControllers.getProductDetail
);
router.get(
  "/product_relate_to/catId=:catId",
  sitesControllers.getProductRelate
);
router.get("/product_favorite/", sitesControllers.getProductFavorite);
router.post(
  "/remove_favorite/productId=:productId",
  sitesControllers.removeFavorite
);
module.exports = router;
