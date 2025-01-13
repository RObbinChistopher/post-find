<template>
    <footer class="footer" style="margin-top: 4rem;">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Popular Categories</h4>
                    <ul>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Flats for rent</a></li>
                        <li><a href="#">Mobile Phones</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Trending Searches</h4>
                    <ul>
                        <li><a href="#">Bikes</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Dogs</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">About Dubizzle Group</a></li>
                        <li><a href="#">OLX Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">OLX for Businesses</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>POST/FIND</h4>
                    <ul>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                




                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>




<style scoped>
.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
    padding-left: 0;
}
.footer{
    background-color: #517472;
    padding: 40px 0 30px 0;
}
.footer-col{
   width: 20%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 15px;
	color: #ffffff;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #ffffff;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 12px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 5px;
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}




</style>