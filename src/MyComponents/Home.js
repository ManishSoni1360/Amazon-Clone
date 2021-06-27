import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="PrimeBanner_Image Error" />
                <div className="home__row">
                    <Product
                        id="1001"
                        title="HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1 (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX"
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product 
                    id="1006"
                    title="MSI GL75 Leopard Gaming Laptop: 17.3 144Hz Display, Intel Core i7-10750H, NVIDIA GeForce GTX 1660 Ti, 16GB RAM, 512GB NVMe SSD, Win10, Black (10SDK-651)"
                    image="https://images-na.ssl-images-amazon.com/images/I/81d1fpxXBcS._AC_SL1500_.jpg"
                    price={1053.21}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1002"
                        title="Lenovo Legion 5 Gaming Laptop, 15.6 FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg"
                        price={1259.00}
                        rating={5}
                    />
                    <Product 
                        id="1003"
                        title="Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6 Full HD IPS | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | Amazon Alexa | Windows 10 Home (S Mode)"
                        price={954084}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71AmKW4yuMS._AC_SL1500_.jpg"
                        />
                    <Product 
                    id="1004"
                    title="ASUS TUF Gaming F17 Gaming Laptop, 144Hz 17.3” FHD IPS-Type Display, Intel Core i5-10300H, GeForce GTX 1650 Ti, 8GB DDR4, 512GB PCIe SSD, RGB Keyboard, Windows 10, Bonfire Black, FX706LI-ES53"
                    price={924.16}
                    image="https://images-na.ssl-images-amazon.com/images/I/91P7uBC9DML._AC_SL1500_.jpg"
                    rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id="1005"
                    title="HP Chromebook 14 Laptop, Dual-core Intel Celeron Processor N3350, 4 GB RAM, 32 GB eMMC Storage, 14-inch FHD IPS Display, Google Chrome OS, Dual Speakers and Audio by B&O (14-ca051nr, 2020)"
                    image="https://images-na.ssl-images-amazon.com/images/I/61EaSVhVe8L._AC_SL1500_.jpg"
                    price={279.98}
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;