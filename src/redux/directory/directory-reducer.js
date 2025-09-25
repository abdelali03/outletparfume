const INITIAL_STATE = {
  sections: [
    {
      title: "Xerjoff",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743624077/xerjoff-accento-eau-de-parfum-392719-de_zcsvcy.jpg",
      id: 1,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743543268/t%C3%A9l%C3%A9chargement_12_ex8bam.png",

      linkUrl: "shop/xerjoff",
    },
    {
      title: "BYREDO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814857/Byredo-post-thumbnail_bz345z.png",
      id: 2,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814868/o.390_fwa4ku.jpg",
      linkUrl: "shop/byredo",
    },
    {
      title: "EX NIHILO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/blue-talisman-probe-abfuellung-2ml-von-ex-nihilo_gqjiyq.jpg",
      id: 3,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/371_1_155066b9f5535b9f78cc57433e364cb6_sekljj.png",
      linkUrl: "shop/exnihilo",
    },
    {
      title: "Versace",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814869/s-l1200_houtlf.jpg",
      id: 4,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814868/o.97_a7oq6m.jpg",
      linkUrl: "shop/versace",
    },
    {
      title: "Calvin Klein",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/3616303476830_Calvin_Klein_Aromatic_Essence_M_EDP_50ml_KV_2026-01-31_1920x1920_ultwqw.webp",
      id: 5,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/BRAND_LANDING_PAGE_AW14_COS_CALVIN_KLEIN_ooqiiq.jpg",
      linkUrl: "shop/calvinklein",
    },
    {
      title: "NISHANE",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814868/hacivat-abfuellung-2ml-von-nishane_jbqnkc.jpg",
      id: 6,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814855/21qI3FStGUL._SS1000__gvnayb.jpg",
      linkUrl: "shop/nishane",
    },
    {
      title: "DSQUARED2",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814877/wood-dsquared2_wvtp0b.jpg",
      id: 7,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814857/dsquared-logo-min_im1q6c.jpg",
      linkUrl: "shop/dsquared2",
    } /*
    {
      title: "MFK",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/aqua-media-kv2-no-logo-1920x1080-649421bac861a_eqx8lj.avif",
      id: 8,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/1045_lmxzvp.jpg",
      linkUrl: "shop/mfk",
    },*/,
    {
      title: "AZZARO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814869/t%C3%A9l%C3%A9chargement_p0w751.jpg",
      id: 9,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814856/azzaro-parfums_kpzfjh.png",
      linkUrl: "shop/azzaro",
    },
    {
      title: "Tiziana Terenzi",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815594/Il-Piacere_icsh6l.jpg",
      id: 10,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814869/Tiziana-logo_rphc1p.webp",
      linkUrl: "shop/tizianaterenzi",
    },
    {
      title: "212 VIP Carolina Herrera",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744814855/195789-3_ulcdgk.jpg",
      id: 11,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815679/CH212-02-1400px-final_wk5pjg.gif",
      linkUrl: "shop/212vipcarolinaherrera",
    },
    {
      title: "tomford",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626336/global_images-888066138741-2_grande_qt2fb9.webp",
      id: 12,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626337/images_vnq7rb.png",
      linkUrl: "shop/tomford",
    },
    {
      title: "Maison Margiela",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815870/Beach-Walk-Eaudetoilette-Sunkissed-mob_qvybde.jpg",
      id: 13,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815884/Maison-Margiela-logo_bcj6l5.jpg",
      linkUrl: "shop/maisonmargiela",
    },
    {
      title: "Bvlgari",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815948/611-image-1200-1200-fit_zyhjgg.jpg",
      id: 14,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815964/Bvlgari-logo-59A805E5A3-seeklogo.com_vywa57.png",
      linkUrl: "shop/bvlgari",
    },
    {
      title: "JIMMY CHOO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816149/d7707c243a9f7468e987acbf9ccd3c93_d9htm3.jpg",
      id: 15,
      imageUrl1: "https://via.placeholder.com/300",
      linkUrl: "shop/jimmychoo",
    },
    {
      title: "Chanel",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743624983/Chanel-Chance-EdP-100ml2_wxwjhp.webp",
      id: 16,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743624982/2e1870e25ff6144acf7f29fee392083c_fivale.jpg",

      linkUrl: "shop/chanel",
    },
    {
      title: "dior",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629469/MD_MiniMiss_Mood_EDP_2400x3000_m4rmhw.jpg",
      id: 17,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629469/o.160_vujnzf.jpg",
      linkUrl: "shop/dior",
    },
    {
      title: "giorgioarmani",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629837/3614274091908_4_800x800_ndjia2.webp",
      id: 18,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629907/o.65_t5ieqn.jpg",

      linkUrl: "shop/giorgioarmani",
    },
    {
      title: "JEROBOAM GOZO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816400/Gozo-Extrait-de-Parfum-30ml-1_1200x1200_sgkwbc.webp",
      id: 19,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816400/images_zns30c.png",
      linkUrl: "shop/jeroboamgozo",
    },

    {
      title: "doce&gabbana",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743625534/81lzbp3K1IL_juokjz.jpg",
      id: 20,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743625534/96d3759c20e4331faeb614b676d78a57_iiz1nf.jpg",

      linkUrl: "shop/dolcegabbana",
    },
    {
      title: "CLIVE CHRISTIAN",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816494/page_1_thumb_large_cetvde.jpg",
      id: 21,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816540/clive-christian-982489_fitpfq.jpg",
      linkUrl: "shop/clivechristian",
    },
    {
      title: "Yves Saint Laurent",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816607/Yves-Saint-Laurent-Black-Opium-advert-campaign-fragrance-scent-perfume-history-for-The-Perfume-Society_eu1vh3.jpg",
      id: 22,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816619/yves-saint-laurent-logo-03C2739F7E-seeklogo.com_r0n3ph.png",
      linkUrl: "shop/yvessaintlaurent",
    },
    {
      title: "VALENTINO",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816844/valentino-voce-viva-poster-1-600x600_trzzcp.jpg",
      id: 23,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744816860/valentino_vl6b7i.svg",
      linkUrl: "shop/valentino",
    },
    {
      title: "simimi",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817173/unnamed_32__bia5au.webp",
      id: 24,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817236/o.2666_kalrx2.jpg",
      linkUrl: "shop/simimi",
    },
    {
      title: "creed",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626101/Bildschirmfoto-2021-06-24-um-21.03.03_vo8dzr.webp",
      id: 25,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626101/WhatsApp_Image_2025-04-01_%C3%A0_23.06.13_383365a4_bl0g8x.jpg",

      linkUrl: "shop/creed",
    },
    {
      title: "prada",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629170/20240919-prada-LatestReleases_326x292_anyk4x.webp",
      id: 26,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743629171/o.143_mytkem.jpg",

      linkUrl: "shop/prada",
    },
    {
      title: "roberto cavalli",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744820748/79e8ea38dd6b9a90d42e23d8a16b6abf_e4tg5q.jpg",
      id: 27,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744820757/roberto-cavalli_sw5g3i.svg",
      linkUrl: "shop/robertocavalli",
    },
    {
      title: "Chloe",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744820845/c99b5ce6a95ef0b34f28a8fff9c04a67_gnrdtx.jpg",
      id: 28,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744820855/chloe-logo-C62282D027-seeklogo.com_a30mva.png",
      linkUrl: "shop/chloe",
    },
    {
      title: "Gisada",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820820/eyJrZXkiOiJ2LmRiL3Byb2R1Y3QvNDUvNDUyOTM0OTUtZTM5ZS01ODY4LWI1ZTQtMjNhMGViYmRjZjY5LmpwZyIsImVkaXRzIjp7InRyaW0iOjEwLCJyZXNpemUiOnsid2lkdGgiOjM1MCwiaGVpZ2h0IjozNTAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZ_hn8j2x.jpg",
      id: 29,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820849/Gisada_Logo_1000x1000_i0fo0n.jpg",
      linkUrl: "shop/gisada",
    },
    {
      title: "Philipp Plein",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744751205/7640365140619_3_800x800_laa65r.webp",
      id: 30,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744751875/o.3827_rizsu7.jpg",
      linkUrl: "shop/philippplein",
    },
    {
      title: "GIVENCHY",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744752252/199694-2_yxd9pv.jpg",
      id: 31,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744752373/givenchy-logo-design_f89fy9.jpg",
      linkUrl: "shop/givenchy",
    },
    {
      title: "Narciso",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744752733/Ingredient-NARCISO-CRISTAL_gfb3nw.jpg",
      id: 32,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744752733/Ingredient-NARCISO-CRISTAL_gfb3nw.jpg",
      linkUrl: "shop/narciso",
    },
    {
      title: "Cartier",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744753290/La-Panthere-by-Cartier-EDP-75ml-3-150x195_ku8jeu.webp",
      id: 33,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744753466/Design-ohne-Titel-54_gq3ar0.png",
      linkUrl: "shop/cartier",
    },
    {
      title: "KAJAL",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744753700/Screenshot-from-2021-02-18-00-39-06_hakjje.png",
      id: 35,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744753810/o.2339_by4gdc.jpg",
      linkUrl: "shop/kajal",
    },

    {
      title: "MEMO Paris",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754303/372b5f28d_4_-705x705_s0l87n.png",
      id: 36,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754372/f3e288f977fc6851f8a4b4ad90d0af4b_yhptrh.webp",
      linkUrl: "shop/memoparis",
    },
    {
      title: "NASOMATTO",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754596/U0j2hXxicopy_1200x1200_va7kam.webp",
      id: 37,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754674/o.2339_vk41os.jpg",
      linkUrl: "shop/nasomatto",
    },
    {
      title: "INITIO",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754804/initio-side-effect-purple-effect-100ml_jdcquw.webp",
      id: 38,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744754874/o.2260_kqsbkt.jpg",
      linkUrl: "shop/initio",
    },
    {
      title: "ORTO PARISI",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755067/cuero-pura-orto-parisi-cuoium-arabiski-kvepalai-70ml_g7lhrl.webp",
      id: 39,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755147/download_y3df1u.png",
      linkUrl: "shop/ortoparisi",
    },
    {
      title: "Victoria´s Secret",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755469/032025-intl-VS-Beauty-CP-mob-FC-Bombshell_sbuj2l.avif",
      id: 40,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755528/o.199_wzcd9w.jpg",
      linkUrl: "shop/victoriassecret",
    },
    {
      title: "PARFUMS de MARLY",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755620/parfum_de_marly_habdan_eau_de_parfum_3_crtjte.webp",
      id: 41,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755677/parfums-de-marly-929249_fkbr8y.webp",
      linkUrl: "shop/parfumsdemarly",
    },
    {
      title: "Bottega Veneta",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744755796/Bottega-Veneta-Knot-Eau-de-Parfum-review-blog_bi4p81.webp",
      id: 42,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744816867/download_kb20bo.jpg",
      linkUrl: "shop/bottegaveneta",
    },
    {
      title: "MUGLER",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744756061/thierry-mugler-alien-perfume-notes_d5e043ba-caa6-4c9f-9102-c4185fb160bb_600x_fgs1ui.jpg",
      id: 43,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744756118/logo-mugler-paris-def-ok-copie_bwigdt.webp",
      linkUrl: "shop/mugler",
    },

    {
      title: "MANCERA",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744817215/deep-forest_hsxuns.jpg",
      id: 44,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744817321/o.1134_j2sjab.jpg",
      linkUrl: "shop/mancera",
    },
    {
      title: "MORPH",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744817561/images_1_waavjt.jpg",
      id: 45,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744817691/images_wd6txn.png",
      linkUrl: "shop/morph",
    },
    {
      title: "Marc-Antoine Barrois",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744817631/images_2_dp7v3w.jpg",
      id: 46,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745616856/logo-marc-antoine-barrois_zeeydi.jpg",
      linkUrl: "shop/marcantoinebarrois",
    },
    {
      title: "ACQUA di PARMA",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818019/images_3_tf9iit.jpg",
      id: 47,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818046/download_2_cqwunn.png",
      linkUrl: "shop/acquadiparma",
    },
    {
      title: "Ducci Giardini di Toscana",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818195/images_4_jpkpne.jpg",
      id: 48,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818234/download_3_dgbm8a.png",
      linkUrl: "shop/duccigiardiniditoscana",
    },
    {
      title: "Burberry",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818818/download_2_nzcobh.jpg",
      id: 49,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818862/download_3_il6t0i.jpg",
      linkUrl: "shop/burberry",
    },
    {
      title: "CAROLINA HERRERA",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744818978/images_5_cpoqkp.jpg",
      id: 50,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819168/download_4_aej7ps.png",
      linkUrl: "shop/carolinaherrera",
    },
    {
      title: "MONTALE",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819495/images_6_lipyq0.jpg",
      id: 51,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819556/download_5_vic33v.png",
      linkUrl: "shop/montale",
    },
    {
      title: "LANCOME",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819678/images_7_cpm4sg.jpg",
      id: 52,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819731/download_6_ptewfg.png",
      linkUrl: "shop/lancome",
    },
    {
      title: "SOSPIRO",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744819942/images_8_nwwgw0.jpg",
      id: 53,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820062/download_7_z8ilvx.png",
      linkUrl: "shop/sospiro",
    },
    {
      title: "Jean Paul Gaultier",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820204/MsIaLX1123739-2-global_z40rmq.avif",
      id: 54,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820328/jean-paul-gaultier_txzzkf.svg",
      linkUrl: "shop/jeanpaulgaultier",
    },
    {
      title: "Kilian Paris",
      imageUrl:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744820422/kilian-paris-the-liquors-angels-share-paradis-eau-de-parfum-banner-600x600-gradmann-1864_800x800_r7wcj6.jpg",
      id: 55,
      imageUrl1:
        "https://res.cloudinary.com/dysuu6zzm/image/upload/v1744821107/kilian_osbpn7.png",
      linkUrl: "shop/kilianparis",
    },
    {
      title: "Hugo Boss",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743624596/3614229828535-7_apgzkx.jpg",
      id: 56,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743624756/Design-ohne-Titel-2024-02-20T114210.296_fgbkgg.png",
      linkUrl: "shop/hugoboss",
    },

    {
      title: "GUERLAIN",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817360/fcMnCkz_ahmrzf.jpg",
      id: 57,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817372/guerlain_vy9yz9.svg",
      linkUrl: "shop/guerlain",
    },
    {
      title: "GUCCI",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815551/38e690100559269.5f0bc2023b2ed_dyxlro.jpg",
      id: 58,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744815566/2a1fd95ec65691394acbbb3fdbe38926_toakjp.jpg",
      linkUrl: "shop/gucci",
    },
    {
      title: "VIKTOR & ROLF",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817643/814pylohIOL._AC_UF1000_1000_QL80__y9yq6i.jpg",
      id: 59,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817668/Viktor_Rolf_kix4p9.png",
      linkUrl: "shop/viktorandrolf",
    },
    {
      title: "Paco Rabanne",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817736/paco-rabanne-fame-poster-1-600x600_fvqeph.jpg",
      id: 60,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744817726/002bac07178d32bbe5cf57e238a876df_rk7t3h.jpg",
      linkUrl: "shop/pacorabanne",
    },
    {
      title: "loius vuitton",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626503/lV_aif6uj.webp",
      id: 61,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743626504/o.2747_ovwgpv.jpg",

      linkUrl: "shop/louisvuitton",
    },
    {
      title: "Amouage",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743627042/images_pdcusy.jpg",
      id: 62,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743627149/Nobilis_Logo_1000x1000_Amouage_casmeu.png",

      linkUrl: "shop/amouage",
    },

    {
      title: "Hermes",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743630519/e695df9d9e7a4bcc809f2676df2db1b0_800x800_dwrmqk.webp",
      id: 63,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1743630519/Hermes_ii6wcx.webp",

      linkUrl: "shop/hermes",
    },
    /*
    {
      title: "Armaf",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533558/s-l1200_klvwx0.jpg",
      id: 67,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533533/o.2068_u4c9nj.jpg",
      linkUrl: "shop/armaf",
    },
    {
      title: "Birberr",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533714/s-l400_lerz92.jpg",
      id: 68,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533626/o.1230_eeqaxc.jpg",
      linkUrl: "shop/birberr",
    },
    {
      title: "By Killian",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533780/d23b18e4a824c0897f2b84de04f7f4a4_ueindu.jpg",
      id: 69,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533794/o.491_yqh4xa.jpg",
      linkUrl: "shop/by-killian",
    },
     {
      title: "Emporio Armani",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533870/b24c92443016307361e015351ba44770_ydj3zf.jpg",
      id: 70,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533854/22ab09cc832829056a579774db8df671_eqko93.jpg",
      linkUrl: "shop/emporio-armani",
    }, */
    {
      title: "Elie Saab",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533957/s-l1200_tkmiff.jpg",
      id: 71,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745533935/o.1222_ekpxi0.png",
      linkUrl: "shop/elie-saab",
    },
    {
      title: "Frederic Malle",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534094/maxresdefault_wxc3hh.jpg",
      id: 72,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534070/o.140_ludvyu.jpg",
      linkUrl: "shop/frederic-malle",
    },
    /*{
      title: "Giardini di Toscana",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534212/o.IH8n2dqN1Jw_xbzxpt.jpg",
      id: 73,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534168/logo-giardini-di-toscana_tks3kx.jpg",
      linkUrl: "shop/giardini-di-toscana",
    },*/
    {
      title: "HFC Devil’s",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534307/DevilsIntrigueBox_Bottle_g7k7p3.jpg",
      id: 74,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534329/355778_p2u9wa.jpg",
      linkUrl: "shop/hfc-devils",
    },
    {
      title: "Kayali",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534412/Kayali-cafe-oud-19-1_ufziws.jpg",
      id: 75,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534395/SQUARE-LOGO_pkxzlg.jpg",
      linkUrl: "shop/kayali",
    },
    {
      title: "Lacoste",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534524/9d1803608730a9ba19e0aed6be84fe6e_sienkf.jpg",
      id: 76,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534462/4bca96ce2ae71fa25576cd9c1f1a1ff1_a0twtn.jpg",
      linkUrl: "shop/lacoste",
    },
    {
      title: "Maison Crivelli",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534650/mobile_cdd32419-3acc-4968-810b-2e49de137ac7_wuohow.png",
      id: 77,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745534589/o.3591_ekcdbp.jpg",
      linkUrl: "shop/maison-crivelli",
    },
    {
      title: "Maison Francis Kurkdjian",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614390/MFK-BR540-2022-70ml-duo-1080x1080-nologo_maszxg.jpg",
      id: 78,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614372/designers-maison-francis-kurkdjian-1_gwfenn.jpg",
      linkUrl: "shop/maison-francis-kurkdjian",
    } /*
    {
      title: "Mancers",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614480/memo_20irsh_20leather_20visuals_tmuj0x.jpg",
      id: 79,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614556/31_mmzilc.png",
      linkUrl: "shop/mancers",
    },
    {
      title: "Marc Antone",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614655/il_570xN.3708180127_nbf1_kh5t8g.jpg",
      id: 80,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614675/logo-marc-antoine-barrois_ouoywt.jpg",
      linkUrl: "shop/marc-antone",
    },*/,
    {
      title: "Matière Première",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614960/MATIERE-PREMIER-Brand-Banner-Campomarzio70_bgqe3u.webp",
      id: 81,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745614957/images_1_s6jqsk.png",
      linkUrl: "shop/matiere-premiere",
    },
    /* {
      title: "Memo Marfa",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615064/3x30_test_lum_1_-_Grande_144e4544-9d8a-4580-9cf0-b80c46f2c0b1_gnm65x.jpg",
      id: 82,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615251/f3e288f977fc6851f8a4b4ad90d0af4b_kyhfkw.webp",
      linkUrl: "shop/memo-marfa",
    },*/
    {
      title: "Molecule",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615359/Collection_2_896x1116_46d4c745-d11d-4dae-ba8d-97d6bb78a4b6_ieiz5r.jpg",
      id: 83,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615382/Molecule_Niche_Perfume_Tel_Aviv_bd1eda8d-3355-4b3c-a61e-ee3b12d749b3_lgpafb.png",
      linkUrl: "shop/molecule",
    },
    {
      title: "Moschino",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615491/linda-evangelista-moschino-fresh-couture-01-620x864_iqyiwj.jpg",
      id: 84,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615548/o.85_whnjwy.jpg",
      linkUrl: "shop/moschino",
    },
    {
      title: "Salvatore Ferragamo",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615605/6baaf1208746eaa72f5bc651e8d479d9_gy3z0n.jpg",
      id: 85,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615662/d6f8d64e605c29f4838816b6da1b0fc0_o9wnaa.jpg",
      linkUrl: "shop/salvatore-ferragamo",
    },
    /*
    {
      title: "Terre de Hermès",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615841/terre_ekec3u.jpg",
      id: 86,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615782/69_1_2f0d51a5f69aacfb149ac7b21c486d89_bvyh9h.png",
      linkUrl: "shop/terre-de-hermes",
    },
   
    {
      title: "Zarko Perfume",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745615940/ZY35_uy4lvv.png",
      id: 87,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1745616085/zarko_logo_fqn074.png",
      linkUrl: "shop/zarko-perfume",
    },*/

    {
      title: "Marc jacob",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815352/mj-daisy-eau-so-intense-olfactive-v3_k2e5tg.jpg",
      id: 93,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815331/marc-jacobs-1_ewl11b.jpg",
      linkUrl: "shop/marc-jacob",
    },
    {
      title: "Jo Malone",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815427/J_Malone_collection_dsyvky.jpg",
      id: 94,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815441/JoMalone_Logo_rjwaee.jpg",
      linkUrl: "shop/jo-malone",
    },
    {
      title: "Celine",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815464/unnamed_ggnvg2.jpg",
      id: 95,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815474/celine-new-logo-sq_nndppr.jpg",
      linkUrl: "shop/celine",
    },
    {
      title: "Philosykos",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815591/philosykos-diptyque-1_tx5par.webp",
      id: 96,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815663/philosykoslogo700_wdhiag.jpg",
      linkUrl: "shop/philosykos",
    },
    {
      title: "Mirabilis",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815760/06373d226105245.Y3JvcCwxNDAwLDEwOTUsMCww_go1cjb.png",
      id: 97,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815801/Mirabilis-Logo-Web_m7tsxw.png",
      linkUrl: "shop/mirabilis",
    },
    {
      title: "Trussardi",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815882/trussardi_parfums_1911_donna_e_uomo_d0qg5e.jpg",
      id: 98,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815855/o.114_ptrdfv.jpg",
      linkUrl: "shop/trussardi",
    },
    {
      title: "Billie Eilish",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815930/71ZDTQBLtFL._UF1000_1000_QL80__jg4jfy.jpg",
      id: 99,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758815949/Billie-Eilish-Logo-Small_wyav3j.jpg",
      linkUrl: "shop/billie-eilish",
    },
    {
      title: "Giardino",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816086/61loP1PcxIL._UF350_350_QL80__tn0dgu.jpg",
      id: 100,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816106/o.5366_t7l9jt.png",
      linkUrl: "shop/giardino",
    },
    {
      title: "Issey Miyake",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816167/IsseyMiyakePARFUME_itggyx.jpg",
      id: 101,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816174/issey-miyake_glmihx.svg",
      linkUrl: "shop/issey-miyake",
    },
    {
      title: "Club de nuit",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816224/718qmLxCymL._UF350_350_QL80__joe0bq.jpg",
      id: 102,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816280/375x500.102813_ztnfli.jpg",
      linkUrl: "shop/club-de-nuit",
    },
    {
      title: "Zadi&Voltaire",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758835425/208917-2_rkxi0m.jpg",
      id: 103,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758835454/zadig-voltaire-this-is-her-coffret-eau-de-parfum_jaclsk.jpg",
      linkUrl: "shop/zadi-voltaire",
    },
    {
      title: "Kenzo",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816435/s-l400_crq1x0.jpg",
      id: 104,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816443/38c9_gukrob.jpg",
      linkUrl: "shop/kenzo",
    },
    {
      title: "L‘ARTISAN PARFUMEUR",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816563/Passage-d-Enfer-100ml-content-banner_gs4jk7.jpg",
      id: 105,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816610/o.119_g93ptt.jpg",
      linkUrl: "shop/lartisanparfumeur",
    },
    {
      title: "DKNY",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816668/dkny-000823dk-1_nnkrqe.webp",
      id: 106,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816679/dkny-logo-png_seeklogo-42335_xlazil.png",
      linkUrl: "shop/dkny",
    },
    {
      title: "Lattafa",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816728/Mens_3fb70373-97d6-4a91-94c6-bbbbe55b8c56_ug0zf4.jpg",
      id: 107,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816737/lattafa-logo-png_seeklogo-511416_h0vdgs.png",
      linkUrl: "shop/lattafa",
    },
    {
      title: "DEAR POLLY",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816754/global_images-p3760298541209-1_egyehu.jpg",
      id: 108,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758816808/s-l400_acje9p.png",
      linkUrl: "shop/dearpolly",
    },
    {
      title: "Roja",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758835723/the-aoud-discovery-collection-discovery-set-roja-parfums-969285_ofcfhn.jpg",
      id: 108,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1758835750/elysium-pour-homme-parfum-by-roja-parfums-17oz-50-ml-5060399671316_cmmp0f.jpg",
      linkUrl: "shop/roja",
    },
    {
      title: "andereProdukte",
      imageUrl:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744819380/bdb156f027f1c83b8884d8b46c1f1361_mja8mu.jpg",
      id: 64,
      imageUrl1:
        "https://res.cloudinary.com/dlxpttd8b/image/upload/v1744819363/OtherProducts-sml_ovtxkj.jpg",

      linkUrl: "shop/andereprodukte",
    },
  ],
};
const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
