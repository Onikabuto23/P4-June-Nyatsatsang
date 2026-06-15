"use client";
import { Image } from "@heroui/image";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <div>
      <h1 className={title()}>Jigtrels moring routine</h1>
      <p>LOreal EverPure Glossing Conditioner for Lasting Shine $10.99</p>
      <div>
        <a href="https://www.ulta.com/p/everpure-sulfate-free-glossing-conditioner-lasting-shine-pimprod2049541?sku=2633795">
          <Image
            alt="condition"
            src="https://media.ulta.com/i/ulta/2633795?w=500&h=500"
            width={400}
          />
        </a>
      </div>
      <p>Naturium The Smoother Glycolic Acid Exfoliating Body Wash $19.99</p>
      <div>
        <a href="https://www.ulta.com/p/smoother-glycolic-acid-exfoliating-body-wash-pimprod2045680?sku=2627591&cmpid=PS_Non!google!Product_Listing_Ads&cagpspn=pla&CATCI=pla-2405565674825&CAAGID=107718644556&CAWELAID=330000200003252514&CATARGETID=330000200002825550&CADevice=c&gad_source=1&gad_campaignid=10966308946&gbraid=0AAAAAD9rLH4LoB63CgwSjJzfaC0ffrFpa&gclid=CjwKCAjw857RBhAgEiwAI-1yKK-pKMbThKGhW4z2I7TS92MUujqiR01i4--W1n-gKeycwCdxN83iwhoC4icQAvD_BwE">
          <Image
            alt="bod wash"
            src="https://media.ulta.com/i/ulta/2627591?w=400&h=400&fmt=auto"
            width={400}
          />
        </a>
      </div>
      <p>Torriden DIVE IN 5D Hyaluronic Acid Ultra Hydrating Serum $24.00</p>
      <div>
        <a href="https://www.sephora.com/product/dive-in-serum-P517680?skuId=2896942&icid2=products%20grid:p517680:product">
          <Image
            alt="hydser"
            src="https://www.sephora.com/productimages/sku/s2896942-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>Dr.G - R.E.D Blemish Clear Soothing Cream $34.95</p>
      <div>
        <a href="https://www.yesstyle.com/en/tcuc.USD/coc.US/info.html/pid.1066131832?cpid=1066131831&googtrans=en&utm_source=GoogleAds&utm_campaign=1424525216&utm_term=&utm_content=190444107813_789337457223&utm_medium=Shopping&bac=D67W82EM&mcg=paidsearch&gad_source=1&gad_campaignid=1424525216&gbraid=0AAAAAD3WTkk_SbRoZk1qp9GDYsVRHWQMb&gclid=CjwKCAjw857RBhAgEiwAI-1yKPSRyN62AKMLy3J5GdrzNDk9bpn7yxfXK6smdt9YNSJ_Xivg08eopxoCZEQQAvD_BwE">
          <Image
            alt="cream"
            src="https://d1flfk77wl2xk4.cloudfront.net/Assets/51/733/XXL_p0220673351.jpg"
            width={400}
          />
        </a>
      </div>
      <p>Dr.G - R.E.D Blemish Soothing Up Sun $29.90</p>
      <div>
        <a href="https://www.yesstyle.com/en/dr-g-r-e-d-blemish-soothing-up-sun-50ml/info.html/pid.1121569176">
          <Image
            alt="sun"
            src="https://d1flfk77wl2xk4.cloudfront.net/Assets/00/693/XXL_p0195769300.jpg"
            width={400}
          />
        </a>
      </div>
      <p>m.ph Le Skin Weightless Serum Foundation $49.00</p>
      <div>
        <a href="https://www.sephora.com/product/P520563">
          <Image
            alt="m.ph"
            src="https://www.sephora.com/productimages/sku/s2944965-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>Prada Micro-Correcting Blurring Concealer with Peptides $48.00</p>
      <div>
        <a href="https://www.sephora.com/product/micro-correcting-blurring-concealer-with-peptides-P520649?skuId=2928646&icid2=products%20grid:p520649:product">
          <Image
            alt="conceal"
            src="https://www.sephora.com/productimages/sku/s2928646-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>
        MAKE UP FOR EVER HD Skin Face Essentials Long-Lasting Full Face Cream
        Palette $89
      </p>
      <div>
        <a href="https://www.sephora.com/product/P510371">
          <Image
            alt="blush"
            src="https://www.sephora.com/productimages/sku/s2765352-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>HUDA BEAUTY Easy Bake Blurring Loose Baking & Setting Powder $39.00</p>
      <div>
        <a href="https://www.sephora.com/product/easy-bake-loose-baking-setting-powder-P433402?skuId=2904894&icid2=products%20grid:p433402:product">
          <Image
            alt="powder"
            src="https://www.sephora.com/productimages/sku/s2904894-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>HUNG VANNGO BEAUTY Soft Focus Blurring Matte Powder Bronzer $38.00</p>
      <div>
        <a href="https://www.sephora.com/product/soft-focus-bluring-matte-powder-bronzer-P518975?skuId=2903268&icid2=products%20grid:p518975:product">
          <Image
            alt="powderb"
            src="https://www.sephora.com/productimages/sku/s2903268-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>
        Charlotte Tilbury Airbrush Flawless Hydrating & Waterproof Setting Spray
        $39.00
      </p>
      <div>
        <a href="https://www.sephora.com/product/charlotte-tilbury-airbrush-flawless-setting-spray-P461147?skuId=2368439&icid2=products%20grid:p461147:product">
          <Image
            alt="setting spray"
            src="https://www.sephora.com/productimages/sku/s2368439-main-zoom.jpg?imwidth=315"
            width={400}
          />
        </a>
      </div>
      <p>Morphe Continuous Prep & Set Setting Mist+ $20.00</p>
      <div>
        <a href="https://www.ulta.com/p/continuous-prep-set-setting-mist-pimprod2039645?sku=2610861">
          <Image
            alt="setting spray2"
            src="https://media.ulta.com/i/ulta/2610861?w=600&h=600&fmt=auto"
            width={400}
          />
        </a>
      </div>
    </div>
  );
}
