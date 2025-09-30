const INITIAL_STATE = {
  sections: [
    {
      title: "Xerjoff",
      imageUrl:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159236/images_1_DE_XERJOF_c8zvrc.jpg",
      id: 1,
      imageUrl1:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759164037/XERJOF_SGHIRA_rxstwp.png",

      linkUrl: "shop/xerjoff",
    },
    {
      title: "BYREDO",
      imageUrl:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159210/byreedo_kbira_cuohhg.jpg",
      id: 2,
      imageUrl1:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159210/BYREDO_SGHIRA_nold7b.png",
      linkUrl: "shop/byredo",
    },
    {
      title: "EX NIHILO",
      imageUrl:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159225/EX_NIHILO_kbira_aypsng.jpg",
      id: 3,
      imageUrl1:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159225/ex_nhilo_sghira_ltgjbg.png",
      linkUrl: "shop/exnihilo",
    },
    {
      title: "Versace",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186601/versace_kbira_xovx6v.jpg ",
      id: 4,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186601/versace_sghira_df9ydf.jpg ",
      linkUrl: "shop/versace",
    },
    {
      title: "Calvin Klein",
      imageUrl:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759182735/calvin_klein_kbira_ftudwk.jpg",
      id: 5,
      imageUrl1:
        "https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159210/calvin_clein_sghira_sltwlg.png",
      linkUrl: "shop/calvinklein",
    },
    {
      title: "NISHANE",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186579/nishane_kbira_xfmnrc.jpg ",
      id: 6,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186578/NISHANE_sghira_cdv0k6.png ",
      linkUrl: "shop/nishane",
    },
    {
      title: "DSQUARED2",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/disquader_kbira_dk3bna.jpg ",
      id: 7,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/disquader_sghira_x7mbfd.png ",
      linkUrl: "shop/dsquared2",
    },
    {
      title: "AZZARO",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159209/azaro_kbira_ikuton.jpg ",
      id: 9,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159209/AZZARO_sghira_ikiac7.png ",
      linkUrl: "shop/azzaro",
    },
    {
      title: "Tiziana Terenzi",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186590/Tiziana_Terenzi_kbira2_htlrn0.jpg",
      id: 10,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186594/Tiziana_Terenzi_sghira_smgbzu.png",
      linkUrl: "shop/tizianaterenzi",
    },
    {
      title: "212 VIP Carolina Herrera",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159207/212_VIP_Carolina_Herrera_KBIRA_am7bni.jpg ",
      id: 11,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159209/212_VIP_Carolina_Herrera_SGHIRA_p2qvku.png",
      linkUrl: "shop/212vipcarolinaherrera",
    },
    {
      title: "tomford",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186589/TOM_FORD_KBIRA_m39kj9.jpg",
      id: 12,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186590/tomford_SGHIRA_yqisnq.png",
      linkUrl: "shop/tomford",
    },
    {
      title: "Maison Margiela",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186556/Maison_Margiela_kbira_vusvvh.jpg",
      id: 13,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186557/Maison_Margiela_sghira_wq7v8u.png",
      linkUrl: "shop/maisonmargiela",
    },
    {
      title: "Bvlgari",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159210/Bvlgari_kbira_woicve.jpg",
      id: 14,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159208/Bvlgari_sghira_ejmxtx.png",
      linkUrl: "shop/bvlgari",
    },
    {
      title: "JIMMY CHOO",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/jimmy_choo_kbira_wqgz7x.jpg",
      id: 15,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/JIMMY_CHOO_sghira_xy55ku.png",
      linkUrl: "shop/jimmychoo",
    },
    {
      title: "Chanel",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/chanel_kbira_tw15ho.jpg",
      id: 16,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/chanel_sghira_omrxr0.png",

      linkUrl: "shop/chanel",
    },
    {
      title: "dior",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159214/dior_kbira_mqc1ab.jpg",
      id: 17,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/dior_sghira_ibaqfx.png",
      linkUrl: "shop/dior",
    },
    {
      title: "giorgioarmani",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159234/giorgio_armani_kbira_pnigfz.jpg",
      id: 18,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159234/giorgio_sghira_p8ugwz.png",

      linkUrl: "shop/giorgioarmani",
    },
    {
      title: "JEROBOAM GOZO",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159245/JEROBOAM_GOZO_kbira_ixzotu.jpg",
      id: 19,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159245/JEROBOAM_GOZO_sghira_lb3ybh.png",
      linkUrl: "shop/jeroboamgozo",
    },

    {
      title: "doce&gabbana",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/doce_gabbana_kbira_jg3vgv.jpg",
      id: 20,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/doce_gabbana_sghira_hsbsvv.jpg",

      linkUrl: "shop/dolcegabbana",
    },
    {
      title: "CLIVE CHRISTIAN",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159212/CLIVE_CHRISTIAN_kbira_powvfn.jpg",
      id: 21,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/CLIVE_CHRISTIAN_sghira_vv4dp2.jpg",
      linkUrl: "shop/clivechristian",
    },
    {
      title: "Yves Saint Laurent",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186606/Yves_Saint_Laurent_kbira_lfdcsm.jpg",
      id: 22,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186606/Yves_Saint_Laurent_sghira_bf2dqq.png",
      linkUrl: "shop/yvessaintlaurent",
    },
    {
      title: "VALENTINO",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186592/VALENTINO_kbira_smu3yq.jpg",
      id: 23,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186600/VALENTINO_sghira_rv9h9i.jpg",
      linkUrl: "shop/valentino",
    },
    {
      title: "simimi",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186587/simimi_kbira_i2h9rl.jpg",
      id: 24,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186587/simimi_sghira_qaasgs.jpg",
      linkUrl: "shop/simimi",
    },
    {
      title: "creed",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159212/creed_jbira2_jhrgaa.jpg",
      id: 25,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159212/creed_sghira_yigmoo.png",

      linkUrl: "shop/creed",
    },
    {
      title: "prada",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186582/prada_kbira2_npszfv.jpg",
      id: 26,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186584/prada_sghira_sassdi.png",

      linkUrl: "shop/prada",
    },
    {
      title: "roberto cavalli",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186584/roberto_cavalli_kbira_btkwwo.jpg",
      id: 27,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186584/roberto_cavalli_sghira_vlblmi.png",
      linkUrl: "shop/robertocavalli",
    },
    {
      title: "Chloe",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/Chloe_kbira_mlo3ss.jpg",
      id: 28,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/Chloe_sghira_mkkbqa.png",
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
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186557/marc_antoine_sghira_zanwx8.png",
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
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159236/Hugo_Boss_kbira_mdoj5d.jpg",
      id: 56,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159236/Hugo_Boss_sghira_b5zgms.png",
      linkUrl: "shop/hugoboss",
    },

    {
      title: "GUERLAIN",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/GUERLAIN_kbira_ogoxjn.jpg",
      id: 57,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/GUERLAIN_sghira_anxzy9.png",
      linkUrl: "shop/guerlain",
    },
    {
      title: "GUCCI",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/gucci_kbira_x9nl1m.jpg",
      id: 58,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/GUCCI_sghira_lrugpd.png",
      linkUrl: "shop/gucci",
    },
    {
      title: "VIKTOR & ROLF",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186601/VIKTOR_ROLF_kbira_jsetyj.jpg",
      id: 59,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186602/VIKTOR_ROLF_sghira_uqwg5c.png",
      linkUrl: "shop/viktorandrolf",
    },
    {
      title: "Paco Rabanne",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186580/Paco_Rabanne_kbira_eiw3lv.jpg",
      id: 60,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186579/Paco_Rabanne_sghira_bui84a.png",
      linkUrl: "shop/pacorabanne",
    },
    {
      title: "loius vuitton",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186530/Louis_Vuitton_kbira_xmu0li.jpg",
      id: 61,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186530/Louis_Vuitton_sghira_kh9wwn.pngg",

      linkUrl: "shop/louisvuitton",
    },
    {
      title: "Amouage",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159208/Amouage_kbira_kr5lyw.jpg",
      id: 62,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159208/Amouage_sghira_pm0lcf.png",

      linkUrl: "shop/amouage",
    },

    {
      title: "Hermes",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/Hermes_kbira_bt2iwg.jpg",
      id: 63,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/Hermes_sghira_z09afg.jpg",

      linkUrl: "shop/hermes",
    },
    /*
    {
      title: "Armaf",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186577/ngt3_jx5wxc.jpg",
      id: 67,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759189312/armaf_sghira_kchc4n.png",
      linkUrl: "shop/armaf",
    },
    {
      title: "Birberr",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759189417/birber_kbira_thhabn.jpg",
      id: 68,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759189416/biber_sghira_ashtbl.png",
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
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159228/Elie_Saab_kbira_wvcx5e.jpg",
      id: 71,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159225/Elie_Saab_sghira_stfclo.png",
      linkUrl: "shop/elie-saab",
    },
    {
      title: "Frederic Malle",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159226/Frederic_Malle_kbira_rg22dt.jpg",
      id: 72,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159225/Frederic_Malle_sghira_vdlgrs.png",
      linkUrl: "shop/frederic-malle",
    },
    /*{
      title: "Giardini di Toscana",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759190040/giardini_di_tocca_kbira_kxjhon.jpg",
      id: 73,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759190040/giardini_di_tocca_sghira_vazjik.jpg",
      linkUrl: "shop/giardini-di-toscana",
    },*/
    {
      title: "HFC Devil’s",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159235/HFC_Devil_s_kbira_bcllya.jpg",
      id: 74,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159236/HFC_Devil_s_sghira_lxpzeb.jpg",
      linkUrl: "shop/hfc-devils",
    },
    {
      title: "Kayali",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/Kayali_kbira_mjzndy.jpg",
      id: 75,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/Kayali_sghira_bukfxv.jpg",
      linkUrl: "shop/kayali",
    },
    {
      title: "Lacoste",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186503/Lacoste_kbira_gsunub.jpg",
      id: 76,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186504/Lacoste_sghira_fy2tmp.png",
      linkUrl: "shop/lacoste",
    },
    {
      title: "Maison Crivelli",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186556/Maison_Crivelli_kbira_wswhdn.jpg",
      id: 77,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186556/Maison_Crivelli_sghira_wwdeqv.jpg",
      linkUrl: "shop/maison-crivelli",
    },
    {
      title: "Maison Francis Kurkdjian",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186556/Maison_Francis_Kurkdjian_kbir_hdffvj.jpg",
      id: 78,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186556/maison_francis_kurdijan_sghira_h8rkqb.jpg",
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
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186563/Mati%C3%A8re_Premi%C3%A8re_kbira_nq1yki.jpg ",
      id: 81,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186595/Mati%C3%A8re_Premi%C3%A8re_sghira_y3rpmy.png ",
      linkUrl: "shop/matiere-premiere",
    },
    /* {
      title: "Memo Marfa",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759190791/memo_kbira_kcaw3g.jpg ",
      id: 82,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759190791/memo_sghira_n8lian.png ",
      linkUrl: "shop/memo-marfa",
    },*/
    {
      title: "Molecule",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186585/Molecule_kbira_ug4krg.jpg ",
      id: 83,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186575/Molecule_sghira_frjlxq.png",
      linkUrl: "shop/molecule",
    },
    {
      title: "Moschino",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186575/Moschino_kbira_o1exvg.jpg ",
      id: 84,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186576/Moschino_sghira_g58ga5.jpg ",
      linkUrl: "shop/moschino",
    },
    {
      title: "Salvatore Ferragamo",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186586/Salvatore_Ferragamo_kira_rt4h7p.jpg",
      id: 85,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186586/Salvatore_Ferragamo_sghir_vovfi8.png",
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
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186561/Marc_jacob_kbira_pqa0yi.jpg",
      id: 93,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186562/Marc_jacob_sghira_ptuwut.jpg",
      linkUrl: "shop/marc-jacob",
    },
    {
      title: "Jo Malone",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/Jo_Malone_kbira_pc13mu.jpg",
      id: 94,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159246/Jo_Malone_sghira_cb1vkl.png",
      linkUrl: "shop/jo-malone",
    },
    {
      title: "Celine",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/Celine_kbira_loncgo.jpg",
      id: 95,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/Celine_sghira_jefsnn.png",
      linkUrl: "shop/celine",
    },
    {
      title: "Philosykos",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186586/Philosykos_kbira_mhpyll.jpg",
      id: 96,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186580/Philosykos_sghira_grsqdg.png",
      linkUrl: "shop/philosykos",
    },
    {
      title: "Mirabilis",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186570/Mirabilis_kbira_bp4zyl.jpg",
      id: 97,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186570/Mirabilis_sghira_whx2rv.png",
      linkUrl: "shop/mirabilis",
    },
    {
      title: "Trussardi",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186591/trusardi_kbira_hxihdc.jpg",
      id: 98,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186591/Trussardi_sghira_i1pwzf.png",
      linkUrl: "shop/trussardi",
    },
    {
      title: "Billie Eilish",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159207/Billie_Eilish_kbira_djysjf.jpg",
      id: 99,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159207/Billie_Eilish_sghira_bor3ht.jpg",
      linkUrl: "shop/billie-eilish",
    },
    {
      title: "Giardino",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159226/Giardino_kbira_pkd8rd.jpg",
      id: 100,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159233/Giardino_sghira_oqbnd3.png",
      linkUrl: "shop/giardino",
    },
    {
      title: "Issey Miyake",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159237/Issey_Miyake_kbira_u2sq0c.jpg",
      id: 101,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159236/Issey_Miyake_sghira_d9p8b7.png",
      linkUrl: "shop/issey-miyake",
    },
    {
      title: "Club de nuit",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759192144/club_de_nuit_kbira_yuupkl.jpg",
      id: 102,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159211/Club_de_nuit_sghira_bxr8hi.jpg",
      linkUrl: "shop/club-de-nuit",
    },
    {
      title: "Zadi&Voltaire",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186607/Zadi_Voltaire_kbira_yr6mxt.jpg",
      id: 103,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186607/Zadi_Voltaire_sghira_gwn9mc.png",
      linkUrl: "shop/zadi-voltaire",
    },
    {
      title: "Kenzo",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186492/Kenzo_kbira_oirwum.jpg",
      id: 104,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186492/Kenzo_sghira_pywypj.png",
      linkUrl: "shop/kenzo",
    },
    {
      title: "L‘ARTISAN PARFUMEUR",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186476/L_ARTISAN_PARFUMEUR_kbira_ljjgev.jpg",
      id: 105,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186476/L_ARTISAN_PARFUMEUR_sghira_kzh2ov.jpg",
      linkUrl: "shop/lartisanparfumeur",
    },
    {
      title: "DKNY",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/DKNY_kbira_rigmcx.jpg",
      id: 106,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159224/DKNY_sghira_lwdknh.png",
      linkUrl: "shop/dkny",
    },
    {
      title: "Lattafa",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186518/Lattafa_kbira_ls1klf.jpg",
      id: 107,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186518/Lattafa_sghira_awwya8.png",
      linkUrl: "shop/lattafa",
    },
    {
      title: "DEAR POLLY",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159212/DEAR_POLLY_kbira_w3o34i.jpg",
      id: 108,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159212/DEAR_POLLY_sghira_rhkv6n.png",
      linkUrl: "shop/dearpolly",
    },
    {
      title: "Roja",
      imageUrl:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186585/Roja_kbira_nlvx6x.jpg",
      id: 109,
      imageUrl1:
        " https://res.cloudinary.com/dhtjosz4e/image/upload/v1759186586/Roja_sghira_vchmo8.png",
      linkUrl: "shop/roja",
    },
    {
      title: "andereProdukte",
      imageUrl:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159208/Andere_Produkte_kbira_p2nj0d.jpg",
      id: 64,
      imageUrl1:
        " https://res.cloudinary.com/dprm4dd8k/image/upload/v1759159208/Andere_Produkte_sghira_xbrd5y.png",

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
