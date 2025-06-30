import React, { useMemo, useState } from 'react'

import basbosabondk from '../images/sharqiiii/basbosa/basbosabondk.webp'
// import basbosaturkilots from '../images/sharqiiii/basbosa/basbosaturkilots.webp'
// import basbosaturkinotila from '../images/sharqiiii/basbosa/basbosaturkinotila.webp'
import basbosatreltche from '../images/sharqiiii/basbosa/basbosatreltche.webp'
import basbosasada from '../images/sharqiiii/basbosa/basbosasada.webp'

import knbasmajajo from '../images/sharqiiii/knafa/knbasmajajo.webp'
import knasawrloks from '../images/sharqiiii/knafa/knasawrloks.webp'
import knaswrnotila from '../images/sharqiiii/knafa/knaswrnotila.webp'
import knbasmbondok from '../images/sharqiiii/knafa/knbasmbondok.webp'
import knbasmsada from '../images/sharqiiii/knafa/knbasmsada.webp'
import knbsmaagwa from '../images/sharqiiii/knafa/knbsmaagwa.webp'
import knbasmgmal from '../images/sharqiiii/knafa/knbasmgmal.webp'
import knbasmfostok from '../images/sharqiiii/knafa/knbasmfostok.webp'
import knbasmmaks from '../images/sharqiiii/knafa/knbasmmaks.webp'
import knbormfostk from '../images/sharqiiii/knafa/knbormfostk.webp'
import knbormmax from '../images/sharqiiii/knafa/knbormmax.webp'
import knsegarbndk from '../images/sharqiiii/knafa/knsegarbndk.webp'
import knsegsad from '../images/sharqiiii/knafa/knsegsad.webp'
import knesh from '../images/sharqiiii/knafa/knesh.webp'
import knkrem from '../images/sharqiiii/knafa/knkrem.webp'
import knkorne from '../images/sharqiiii/knafa/knkorne.webp'
import knnotil from '../images/sharqiiii/knafa/knnotil.webp'

// شرقيات
import esp from '../images/sharqiiii/sharkyat/esp.webp'
import bsema from '../images/sharqiiii/sharkyat/bsema.webp'
import balhshamesp from '../images/sharqiiii/sharkyat/balhshamesp.webp'
import balhshamkr from '../images/sharqiiii/sharkyat/balhshamkr.webp'
import blhshanotil from '../images/sharqiiii/sharkyat/blhshanotil.webp'
import daloaa from '../images/sharqiiii/sharkyat/daloaa.webp'
import rmosh from '../images/sharqiiii/sharkyat/rmosh.webp'
import rowni from '../images/sharqiiii/sharkyat/rowni.webp'
import shklma from '../images/sharqiiii/sharkyat/shklma.webp'
import shhd from '../images/sharqiiii/sharkyat/shhd.webp'
import aziza from '../images/sharqiiii/sharkyat/aziza.webp'
import lenzblh from '../images/sharqiiii/sharkyat/lenzblh.webp'
import lenzcrem from '../images/sharqiiii/sharkyat/lenzcrem.webp'
import nmora from '../images/sharqiiii/sharkyat/nmora.webp'
import hreszbeb from '../images/sharqiiii/sharkyat/hreszbeb.webp'
import hressham from '../images/sharqiiii/sharkyat/hressham.webp'
import hresa from '../images/sharqiiii/sharkyat/hresa.webp'

// الفورم 
import forbasbnd from '../images/sharqiiii/foram/forbasbnd.webp'
import forbassad from '../images/sharqiiii/foram/forbassad.webp'
import forbklsori from '../images/sharqiiii/foram/forbklsori.webp'
import forbklmks from '../images/sharqiiii/foram/forbklmks.webp'
import forknfcrem from '../images/sharqiiii/foram/forknfcrem.webp'
import elbabeklawaturki from '../images/sharqiiii/foram/elbabeklawaturki.webp'
import elbasharkisosat from '../images/sharqiiii/foram/elbasharkisosat.webp'
import formadaloaa8seson from '../images/sharqiiii/foram/formadaloaa8seson.webp'
import formadaloaa4seson from '../images/sharqiiii/foram/formadaloaa4seson.webp'
// import formakonafamango from '../images/sharqiiii/atbak/formakonafamango.webp'



import bklbgash from '../images/sharqiiii/baklawa/bklbgash.webp'
import bklhggml from '../images/sharqiiii/baklawa/bklhggml.webp'
import bklsda from '../images/sharqiiii/baklawa/bklsda.webp'
import bklskerf from '../images/sharqiiii/baklawa/bklskerf.webp'
import bklsegh from '../images/sharqiiii/baklawa/bklsegh.webp'
import bklsh from '../images/sharqiiii/baklawa/bklsh.webp'
import bklgaesh from '../images/sharqiiii/baklawa/bklgaesh.webp'
import bklesht from '../images/sharqiiii/baklawa/bklesht.webp'
import bklcrem from '../images/sharqiiii/baklawa/bklcrem.webp'
import bklbasha from '../images/sharqiiii/baklawa/bklbasha.webp'
import bklloz from '../images/sharqiiii/baklawa/bklloz.webp'
import bklmsht from '../images/sharqiiii/baklawa/bklmsht.webp'

// بلاك بيس 
import bbrfelf from '../images/gharpiiii/black-bes/bbrfelf.webp'
import bbshoc from '../images/gharpiiii/black-bes/bbshoc.webp'
import bbfstk from '../images/gharpiiii/black-bes/bbfstk.webp'
import bblots from '../images/gharpiiii/black-bes/bblots.webp'
import blcbesfakh from '../images/gharpiiii/black-bes/blcbesfakh.webp'


import arzblots from '../images/gharpiiii/bolat/arzblots.webp'
import arzbmksr from '../images/gharpiiii/bolat/arzbmksr.webp'
import omalkber from '../images/gharpiiii/bolat/omalkber.webp'
import omali from '../images/gharpiiii/bolat/omali.webp'
import bol5 from '../images/gharpiiii/bolat/bol5.webp'
import bol6 from '../images/gharpiiii/bolat/bol6.webp'
import bol7 from '../images/gharpiiii/bolat/bol7.webp'
import bol8 from '../images/gharpiiii/bolat/bol8.webp'
import bol9 from '../images/gharpiiii/bolat/bol9.webp'
import bol10 from '../images/gharpiiii/bolat/bol10.webp'
// تشيز كيك
import chc1 from '../images/gharpiiii/chese-cake/chc1.webp'
import chc2 from '../images/gharpiiii/chese-cake/chc2.webp'
import chc3 from '../images/gharpiiii/chese-cake/chc3.webp'
import chc4 from '../images/gharpiiii/chese-cake/chc4.webp'
import chc5 from '../images/gharpiiii/chese-cake/chc5.webp'
import chc6 from '../images/gharpiiii/chese-cake/chc6.webp'
import chc7 from '../images/gharpiiii/chese-cake/chc7.webp'
import chc8 from '../images/gharpiiii/chese-cake/chc8.webp'
// اكليير
import eclsnec from '../images/gharpiiii/eclair/eclsnec.webp'
import eclchoc from '../images/gharpiiii/eclair/eclchoc.webp'
import eclcram from '../images/gharpiiii/eclair/eclcram.webp'
import eclkndr from '../images/gharpiiii/eclair/eclkndr.webp'
import ecllots from '../images/gharpiiii/eclair/ecllots.webp'
import eclmksberr from '../images/gharpiiii/eclair/eclmksberr.webp'
import eclnotl from '../images/gharpiiii/eclair/eclnotl.webp'

// انجلش كيك 
import qlbengchoc from '../images/gharpiiii/english-cake/qlbengchoc.webp'
import qlbengvan from '../images/gharpiiii/english-cake/qlbengvan.webp'
// import qtacak from '../images/gharpiiii/english-cake/qtacak.webp'


// بودابست رول 
import bdb1 from '../images/gharpiiii/bodabst-rol/bdb1.webp'
import bdb2 from '../images/gharpiiii/bodabst-rol/bdb2.webp'
import bdb3 from '../images/gharpiiii/bodabst-rol/bdb3.webp'
import bdb4 from '../images/gharpiiii/bodabst-rol/bdb4.webp'

// براونز استيك 
import brws1 from '../images/gharpiiii/brawnes-stick/brws1.webp'
import brws2 from '../images/gharpiiii/brawnes-stick/brws2.webp'
import brws3 from '../images/gharpiiii/brawnes-stick/brws3.webp'


// جاتوه
import gthamerc from '../images/gharpiiii/gatoah/gthamerc.webp'
import gthita from '../images/gharpiiii/gatoah/gthita.webp'
import gthfrglx from '../images/gharpiiii/gatoah/gthfrglx.webp'
import gthfrrosh from '../images/gharpiiii/gatoah/gthfrrosh.webp'
import gthfrfadg from '../images/gharpiiii/gatoah/gthfrfadg.webp'
// import gthfr from '../images/gharpiiii/gatoah/gthfr.webp'

// جاتوه سواريه 
import boxsada from '../images/gharpiiii/gatoah-soareh/boxsada.webp'
import soars20 from '../images/gharpiiii/gatoah-soareh/soars20.webp'
import soak40 from '../images/gharpiiii/gatoah-soareh/soak40.webp'
import mshsoarshrk from '../images/gharpiiii/gatoah-soareh/mshsoarshrk.webp'

// اسبشيال بيس 
import espp1 from '../images/gharpiiii/especia-bes/espp1.webp'
import espp2 from '../images/gharpiiii/especia-bes/espp2.webp'
import espp3 from '../images/gharpiiii/especia-bes/espp3.webp'
import espp4 from '../images/gharpiiii/especia-bes/espp4.webp'
import espp5 from '../images/gharpiiii/especia-bes/espp5.webp'
import espp6 from '../images/gharpiiii/especia-bes/espp6.webp'
import espp7 from '../images/gharpiiii/especia-bes/espp7.webp'
import espp8 from '../images/gharpiiii/especia-bes/espp8.webp'
import espp9 from '../images/gharpiiii/especia-bes/espp9.webp'
import espp10 from '../images/gharpiiii/especia-bes/espp10.webp'
import espp11 from '../images/gharpiiii/especia-bes/espp11.webp'


// ديزيرت 
import babfwaka from '../images/gharpiiii/ketaa-halwa/babfwaka.webp'
import des2 from '../images/gharpiiii/ketaa-halwa/des2.webp'
// import branzsteck from '../images/gharpiiii/ketaa-halwa/branzsteck.webp'
// import bodabestrol from '../images/gharpiiii/ketaa-halwa/bodabestrol.webp'
import tramesbestch from '../images/gharpiiii/ketaa-halwa/tramesbestch.webp'
// import santnorblu from '../images/gharpiiii/ketaa-halwa/santnorblu.webp'
// import santnorchoc from '../images/gharpiiii/ketaa-halwa/santnorchoc.webp'
import qtatrmsu from '../images/gharpiiii/ketaa-halwa/qtatrmsu.webp'
import qtafdg from '../images/gharpiiii/ketaa-halwa/qtafdg.webp'
import qtanotl from '../images/gharpiiii/ketaa-halwa/qtanotl.webp'
import qtahancak from '../images/gharpiiii/ketaa-halwa/qtahancak.webp'
// import capskrcak from '../images/gharpiiii/ketaa-halwa/capskrcak.webp'
import moltcak from '../images/gharpiiii/ketaa-halwa/moltcak.webp'

// ملفاااي
import qtamelfspc from '../images/gharpiiii/melfay/qtamelfspc.webp'
import melfskr from '../images/gharpiiii/melfay/melfskr.webp'
import melfchoc from '../images/gharpiiii/melfay/melfchoc.webp'
import melflots from '../images/gharpiiii/melfay/melflots.webp'
import melfmrba from '../images/gharpiiii/melfay/melfmrba.webp'
import mlf6 from '../images/gharpiiii/melfay/mlf6.webp'
import melfmksr from '../images/gharpiiii/melfay/melfmksr.webp'
// ميلك كريم 
import mk1 from '../images/gharpiiii/milk-kreem/mk1.webp'
import mk2 from '../images/gharpiiii/milk-kreem/mk2.webp'
import mk3 from '../images/gharpiiii/milk-kreem/mk3.webp'
import mk4 from '../images/gharpiiii/milk-kreem/mk4.webp'
import mk5 from '../images/gharpiiii/milk-kreem/mk5.webp'
import mk6 from '../images/gharpiiii/milk-kreem/mk6.webp'


// import trtbrfchoc from '../images/gharpiiii/tart/trtbrfchoc.webp'
// import trtbrflots from '../images/gharpiiii/tart/trtbrflots.webp'
// import qtatrtlots from '../images/gharpiiii/tart/qtatrtlots.webp'
// import qtatrtnotl from '../images/gharpiiii/tart/qtatrtnotl.webp'

// تورت فرنسي 
import tfses4ita from '../images/gharpiiii/torat-france/tfses4ita.webp'
import tfses8 from '../images/gharpiiii/torat-france/tfses8.webp'
import blcfrst from '../images/gharpiiii/torat-france/blcfrst.webp'
import toti from '../images/gharpiiii/torat-france/toti.webp'
import tfglx from '../images/gharpiiii/torat-france/tfglx.webp'
import tfchoc from '../images/gharpiiii/torat-france/tfchoc.webp'
import tffadg from '../images/gharpiiii/torat-france/tffadg.webp'
import tffrtcher from '../images/gharpiiii/torat-france/tffrtcher.webp'
import tfcrml from '../images/gharpiiii/torat-france/tfcrml.webp'
import tfnotl from '../images/gharpiiii/torat-france/tfnotl.webp'
import tfhaf from '../images/gharpiiii/torat-france/tfhaf.webp'
import tfwrosh from '../images/gharpiiii/torat-france/tfwrosh.webp'
import tf5 from '../images/gharpiiii/torat-france/tf5.webp'
import tf9 from '../images/gharpiiii/torat-france/tf9.webp'
import tf11 from '../images/gharpiiii/torat-france/tf11.webp'
import tf14 from '../images/gharpiiii/torat-france/tf14.webp'
import tf15 from '../images/gharpiiii/torat-france/tf15.webp'
// import tfmelfchoc from '../images/gharpiiii/torat-france/tfmelfchoc.webp'
// import tfmelf from '../images/gharpiiii/torat-france/tfmelf.webp'
// import tfhafita from '../images/gharpiiii/torat-france/tfhafita.webp'
// import tfhafmrba from '../images/gharpiiii/torat-france/tfhafmrba.webp'
// import tffrerrosh from '../images/gharpiiii/torat-france/tffrerrosh.webp'
// import gefar from '../images/gharpiiii/torat-france/gefar.webp'

import tortagenskr1 from '../images/gharpiiii/tort-agen-sokr/sokaragen1.webp'
import tortagenskr2 from '../images/gharpiiii/tort-agen-sokr/sokaragen2.webp'
import tortagenskr3 from '../images/gharpiiii/tort-agen-sokr/sokaragen3.webp'
// تورت اميركان
import amrcblkfstk from '../images/gharpiiii/tort-amerecan/amrcblkfstk.webp'
import amrcblkchoc from '../images/gharpiiii/tort-amerecan/amrcblkchoc.webp'
import tacamrc4ses from '../images/gharpiiii/tort-amerecan/tacamrc4ses.webp'
import tamrcmkxlots from '../images/gharpiiii/tort-amerecan/tamrcmkxlots.webp'
import tamrclots from '../images/gharpiiii/tort-amerecan/tamrclots.webp'

import tortmksatkhs from '../images/gharpiiii/tort-makasat-khasa/tortmksatkhs.webp'

import tm6 from '../images/gharpiiii/tort-mini/tm6.webp'
import tmchockndr from '../images/gharpiiii/tort-mini/tmchockndr.webp'
import tmleprnc from '../images/gharpiiii/tort-mini/tmleprnc.webp'
import tmoreo from '../images/gharpiiii/tort-mini/tmoreo.webp'
import tmred from '../images/gharpiiii/tort-mini/tmred.webp'
import tmmostchoc from '../images/gharpiiii/tort-mini/tmmostchoc.webp'


import trenotil from '../images/gharpiiii/treletche/trenotil.webp'
import trel2 from '../images/gharpiiii/treletche/trel2.webp'
import trel3 from '../images/gharpiiii/treletche/trel3.webp'

import iceckelo from '../images/iceee/ice-cream/iceckelo.webp'
import bolicebask from '../images/iceee/ice-cream/bolicebask.webp'
import bolice from '../images/iceee/ice-cream/bolice.webp'

import iccsnec from '../images/iceee/ice-cream-cake/iccsnec.webp'
import icecoreo from '../images/iceee/ice-cream-cake/icecoreo.webp'
import iceczbadtot from '../images/iceee/ice-cream-cake/iceczbadtot.webp'
import iccchoc from '../images/iceee/ice-cream-cake/iccchoc.webp'
import iccchocdbu from '../images/iceee/ice-cream-cake/iccchocdbu.webp'
import iccfrawlmang from '../images/iceee/ice-cream-cake/iccfrawlmang.webp'
import icefostk from '../images/iceee/ice-cream-cake/icefostk.webp'
import icckitkat from '../images/iceee/ice-cream-cake/icckitkat.webp'
import icecklots from '../images/iceee/ice-cream-cake/icecklots.webp'



// import batbastrm from '../images/mognatttt/eftar/batbastrm.webp'
// import bategbn from '../images/mognatttt/eftar/bategbn.webp'
// import brekfst from '../images/mognatttt/eftar/brekfst.webp'
// import pizzaslic from '../images/mognatttt/eftar/pizzaslic.webp'
// import kortommdkh from '../images/mognatttt/eftar//kortommdkh.webp'
// import korsad from '../images/mognatttt/eftar/korsad.webp'
// مخبوزات 
import mkh1 from '../images/mognatttt/makhbozat/mkh1.webp'
import mkh2 from '../images/mognatttt/makhbozat/mkh2.webp'
import mkh3 from '../images/mognatttt/makhbozat/mkh3.webp'
import mkh4 from '../images/mognatttt/makhbozat/mkh4.webp'
import mkh5 from '../images/mognatttt/makhbozat/mkh5.webp'
import mkh6 from '../images/mognatttt/makhbozat/mkh6.webp'
import mkh7 from '../images/mognatttt/makhbozat/mkh7.webp'
import mkh8 from '../images/mognatttt/makhbozat/mkh8.webp'
import mkh9 from '../images/mognatttt/makhbozat/mkh9.webp'
// فطاءر
import ftrrom from '../images/mognatttt/fataer/ftrrom.webp'
import ftrsad from '../images/mognatttt/fataer/ftrsad.webp'
import ftrlots from '../images/mognatttt/fataer/ftrlots.webp'
import ftrminskr from '../images/mognatttt/fataer/ftrminskr.webp'


// معجنات
import mog1 from '../images/mognatttt/mogan/mog1.webp'
import mog2 from '../images/mognatttt/mogan/mog2.webp'
import mog3 from '../images/mognatttt/mogan/mog3.webp'
import mog4 from '../images/mognatttt/mogan/mog4.webp'
import mog5 from '../images/mognatttt/mogan/mog5.webp'
import mog6 from '../images/mognatttt/mogan/mog6.webp'
import mog7 from '../images/mognatttt/mogan/mog7.webp'
import mog8 from '../images/mognatttt/mogan/mog8.webp'

// دوناتس وسينابون 
import ds1 from '../images/mognatttt/donates-senabon/ds1.webp'
import ds2 from '../images/mognatttt/donates-senabon/ds2.webp'
import ds3 from '../images/mognatttt/donates-senabon/ds3.webp'
import ds4 from '../images/mognatttt/donates-senabon/ds4.webp'
import ds5 from '../images/mognatttt/donates-senabon/ds5.webp'
import ds6 from '../images/mognatttt/donates-senabon/ds6.webp'
import ds7 from '../images/mognatttt/donates-senabon/ds7.webp'
import ds8 from '../images/mognatttt/donates-senabon/ds8.webp'
import ds9 from '../images/mognatttt/donates-senabon/ds9.webp'
import ds10 from '../images/mognatttt/donates-senabon/ds10.webp'

// كرواسون 
import krw1 from '../images/mognatttt/korwason/krw1.webp'
import krw2 from '../images/mognatttt/korwason/krw2.webp'
import krw3 from '../images/mognatttt/korwason/krw3.webp'
import krw4 from '../images/mognatttt/korwason/krw4.webp'
import krw5 from '../images/mognatttt/korwason/krw5.webp'
import krw6 from '../images/mognatttt/korwason/krw6.webp'
import krw7 from '../images/mognatttt/korwason/krw7.webp'
import krw8 from '../images/mognatttt/korwason/krw8.webp'
import krw9 from '../images/mognatttt/korwason/krw9.webp'
import krw10 from '../images/mognatttt/korwason/krw10.webp'
import krw13 from '../images/mognatttt/korwason/krw13.webp'
import krw14 from '../images/mognatttt/korwason/krw14.webp'

// دانش
import dan1 from '../images/mognatttt/dansh/dan1.webp'
import dan2 from '../images/mognatttt/dansh/dan2.webp'
import dan3 from '../images/mognatttt/dansh/dan3.webp'
import dan4 from '../images/mognatttt/dansh/dan4.webp'
import dan5 from '../images/mognatttt/dansh/dan5.webp'
import dan6 from '../images/mognatttt/dansh/dan6.webp'
import dan7 from '../images/mognatttt/dansh/dan7.webp'
import dan8 from '../images/mognatttt/dansh/dan8.webp'
import dan9 from '../images/mognatttt/dansh/dan9.webp'


// import salskher from '../images/mognatttt/salezonat/salskher.webp'
// import salkber from '../images/mognatttt/salezonat/salkber.webp'
// import mnakesh from '../images/mognatttt/salezonat/mnakesh.webp'
// import minisadw from '../images/mognatttt/salezonat/minisadw.webp'
// الكعك 
import ghreba from '../images/nawaem/kaak/ghreba.webp'
import kaaksad from '../images/nawaem/kaak/kaaksad.webp'
import kaakagmgamal from '../images/nawaem/kaak/kaakagmgamal.webp'
import kaakagmia from '../images/nawaem/kaak/kaakagmia.webp'
import kaakgamal from '../images/nawaem/kaak/kaakgamal.webp'
import kaakmlbnmks from '../images/nawaem/kaak/kaakmlbnmks.webp'
import kaakmlbn from '../images/nawaem/kaak/kaakmlbn.webp'

// البسكوت 
import basknash from '../images/nawaem/baskwet/basknash.webp'
import bskwchocfs from '../images/nawaem/baskwet/bskwchocfs.webp'


// import danshdfer from '../images/mognatttt/donates-senabon/danshdfer.webp'
// import danshloz from '../images/mognatttt/donates-senabon/danshloz.webp'
// import senabon from '../images/mognatttt/donates-senabon/senabon.webp'
// import elbaminibombskr from '../images/mognatttt/donates-senabon/elbaminibombskr.webp'
// import elbaminibomb from '../images/mognatttt/donates-senabon/elbaminibomb.webp'
// import elbaminidnts from '../images/mognatttt/donates-senabon/elbaminidnts.webp'
// import qtabombnotil from '../images/mognatttt/donates-senabon/qtabombnotil.webp'
// import qtabombcrem from '../images/mognatttt/donates-senabon/qtabombcrem.webp'
// import qtadonts from '../images/mognatttt/donates-senabon/qtadonts.webp'
// import mkssenab from '../images/mognatttt/donates-senabon/mkssenab.webp'
// بيتي فور وسابليه 
import btfabiad from '../images/nawaem/betefore-sable/btfabiad.webp'
import btfchoc from '../images/nawaem/betefore-sable/btfchoc.webp'
import btfsos from '../images/nawaem/betefore-sable/btfsos.webp'
import able from '../images/nawaem/betefore-sable/able.webp'
import coksos from '../images/nawaem/betefore-sable/coksos.webp'
import minitart from '../images/nawaem/betefore-sable/minitart.webp'



import waiting from '../images/favicon.webp'
import torminchoc from '../images/gharpiiii/tort-mini/torminchoc.webp'
// import torthafnotil from '../images/gharpiiii/torat-france/torthafnotil.webp'
import ftkremks from '../images/mognatttt/fataer/ftkremks.webp'
import fobasmks from '../images/sharqiiii/foram/fobasmks.webp'
import foknfsor from '../images/sharqiiii/foram/foknfsor.webp'
import fobklhaf from '../images/sharqiiii/foram/fobklhaf.webp'
import mshbk from '../images/sharqiiii/sharkyat/mshbk.webp'
import blhshamsad from '../images/sharqiiii/sharkyat/blhshamsad.webp'
import knfmango from '../images/sharqiiii/knafa/knfmango.webp'
import basturcre from '../images/sharqiiii/basbosa/basturcre.webp'
import basmksr from '../images/sharqiiii/basbosa/basmksr.webp'
import icechocfan from '../images/iceee/ice-cream-cake/icechocfan.webp'

// شيكولاتة 
import cho1 from '../images/iceee/checolate/cho1.webp'
import cho6bndk from '../images/iceee/checolate/cho6bndk.webp'
import choalbmksr from '../images/iceee/checolate/choalbmksr.webp'
import chobndk from '../images/iceee/checolate/chobndk.webp'
import chocaraml from '../images/iceee/checolate/chocaraml.webp'
import chocrebndk from '../images/iceee/checolate/chocrebndk.webp'
import chocremhalb from '../images/iceee/checolate/chocremhalb.webp'
import chocremkahwa from '../images/iceee/checolate/chocremkahwa.webp'
import chohashwtabeie from '../images/iceee/checolate/chohashwtabeie.webp'
import choloz from '../images/iceee/checolate/choloz.webp'
import chonotilmksr from '../images/iceee/checolate/chonotilmksr.webp'
import chooreo from '../images/iceee/checolate/chooreo.webp'

import chosabkmksr from '../images/iceee/checolate/chosabkmksr.webp'
import eclairfakh from '../images/gharpiiii/eclair/eclairfakh.webp'
import fterblh from '../images/mognatttt/fataer/fterblh.webp'
import knfaswrbndk from '../images/sharqiiii/knafa/knfaswrbndk.webp'
// import milkcremfakha from '../images/gharpiiii/milk-kreem/milkcremfakha.webp'
// import orzlbnfakh from '../images/gharpiiii/bolat/orzlbnfakh.webp'
import qtafakha from '../images/gharpiiii/ketaa-halwa/qtafakha.webp'
// import qtatartfakha from '../images/gharpiiii/tart/qtatartfakha.webp'
import tortgalxfakh from '../images/gharpiiii/torat-france/tortgalxfakh.webp'
// import treletcesanfakha from '../images/gharpiiii/treletche/treletcesanfakha.webp'
// import treletchefakh from '../images/gharpiiii/treletche/treletchefakh.webp'


const Products = ({searchText,selectedSubCategory,setSelectedSubCategory}) => {
  const [loading, setLoading] = useState(true)

    const products = {

      // الغربييييييييييييييييييييييييييي
      // تورت فرنسي
      2:[
        { name:  "8 سيزون" , price:"585 جنيه" , img: `${tfses8}` },
        { name:  "وايت روشية" , price:"675 جنيه" , img: `${tfwrosh}` },
        { name:  "بلاك فورست" , price:"550 جنيه" , img: `${blcfrst}` },
        { name:  "هاف" , price:"550 جنيه" , img: `${tfhaf}` },
        { name:  "ميكس فروت" , price:"585 جنيه" , img: `${tf5}` },
        { name:  "كراميل مدور" , price:"560 جنيه" , img: `${tfcrml}` },
        { name:  "شوكلت" , price:"625 جنيه" , img: `${tfchoc}` },
        { name:  "سيزون 4 ايطالي" , price:"545 جنيه" , img: `${tfses4ita}` },
        // { name:  "بنانا كوكونت" , price:"550 جنيه" , img: `${tf9}` },
        { name:  "جالاكسي" , price:"735 جنيه" , img: `${tfglx}` },
        { name:  "ميلك فروت" , price:"625 جنيه" , img: `${tf11}` },
        { name:  "توتي" , price:"515 جنيه" , img: `${toti}` },
        { name:  "فادج" , price:"690 جنيه" , img: `${tffadg}` },
        { name:  "شوكلت كراميل" , price:"535 جنيه" , img: `${tf14}` },
        { name:  "شوكلت هازلنت" , price:"675 جنيه" , img: `${tf15}` },
        { name:  "فروت شيري" , price:"525 جنيه" , img: `${tffrtcher}` },
        { name:  "نوتيلا" , price:"600 جنيه" , img: `${tfnotl}` },
        { name:  "جالاكسي فاكهة" , price:"650 جنيه" , img: `${tortgalxfakh}` },
        // { name:  "تورتة جيفارا" , price:"720 جنيه" , img: `${gefar}` },
        // { name:  "هاف مربع" , price:"720 جنيه" , img: `${tfhafmrba}` },
        // { name:  "هاف ايطالي" , price:"450 جنيه" , img: `${tfhafita}` },
        // { name:  "فريرو روشية" , price:"800 جنيه" , img: `${tffrerrosh}` },
        // { name:  "ملفاي شوكلت" , price:"570 جنيه" , img: `${tfmelfchoc}` },
        // { name:  "ملفاي" , price:"520 جنيه" , img: `${tfmelf}` },
        // { name:  "هاف نوتيلا" , price:"600 جنيه" , img: `${torthafnotil}` },

      ],
      // تورت اميركان
      3:[
        { name:  "اميركان لوتس ميكس بيري" , price:"500 جنيه" , img: `${tamrcmkxlots}` },
        { name:  "اميركان بلاك فستق" , price:"535 جنيه" , img: `${amrcblkfstk}` },
        { name:  "اميركان فور سيزون" , price:"605 جنيه" , img: `${tacamrc4ses}` },
        { name:  "اميركان شوكلت نوتيلا" , price:"450 جنيه" , img: `${amrcblkchoc}` },
        { name:  "اميركان لوتس" , price:"425 جنيه" , img: `${tamrclots}` },

      ],

      // ميني تورتة 
      4:[
        { name:  "تورتة ميني مستطيل شوكلت" , price:"475 جنيه" , img: `${tmmostchoc}` },
        { name:  "تورتة ميني شوكلت" , price:"375 جنيه" , img: `${torminchoc}` },
        { name:  "تورتة ميني شوكلت كيندر" , price:"395 جنيه" , img: `${tmchockndr}` },
        { name:  "ميني ريد فيلفت" , price:"355 جنيه" , img: `${tmred}` },
        { name:  "تورتة ميني اوريو" , price:"425 جنيه" , img: `${tmoreo}` },
        { name:  "تورتة ميني مانجو" , price:"325 جنيه" , img: `${tm6}` },
        { name:  "تورتة لي برنسس" , price:"400 جنيه" , img: `${tmleprnc}` },

      ],
      // التورت الخاصة 
      5:[
        { name:  "تورتة مقاس خاص" , price:"" , img: `${tortmksatkhs}` },
        { name:  " مقاس 25 * 25 سم" , price:"850 جنيه" , img: `${waiting}` },
        { name:  " مقاس 30 * 40 سم" , price:"1150 جنيه" , img: `${waiting}` },
        { name:  " مقاس 40 * 60 سم" , price:"1850 جنيه" , img: `${waiting}` },
        { name:  "مقاس 30 سم مدور" , price:"1125 جنيه" , img: `${waiting}` },
        { name:  "مقاس 45 سم مدور" , price:"1800 جنيه" , img: `${waiting}` },
        { name:  "اضافة صورة صغيرة" , price:"120 جنيه" , img: `${waiting}` },
        { name:  "اضافة صورة كبيرة" , price:"150 جنيه" , img: `${waiting}` },

      ],
      // تورت السكر
      6:[
        { name:  "تورتة عجين السكر" , price:"" , img: `${tortagenskr1}` },
        { name:  "تورتة عجين السكر" , price:"" , img: `${tortagenskr2}` },
        { name:  "تورتة عجين السكر" , price:"" , img: `${tortagenskr3}` },
        { name:  "مقاس 15" , price:"400:600 جنيه" , img: `${waiting}` },
        { name:  "مقاس 20" , price:"800:1000 جنيه" , img: `${waiting}` },
        { name:  "مقاس 24" , price:"1000:1200 جنيه" , img: `${waiting}` },
        { name:  "مقاس 26" , price:"1100:1300 جنيه" , img: `${waiting}` },

      ],
      // تري ليتشي 
      7:[
        { name:  "تريلتشي نوتيلا" , price:"400 جنيه" , img: `${trenotil}` },
        // { name:  "تريلتشي لوتس" , price:"350 جنيه" , img: `${trelots}` },
        { name:  "تريلتشي فاكهة" , price:"400 جنيه" , img: `${trel2}` },
        { name:  "تريلتشي فراولة" , price:"400 جنيه" , img: `${trel3}` },
        // { name:  "تريلتشي فيلاميندو" , price:"530 جنيه" , img: `${treflamd}` },
        // { name:  "تريلتشي صنداي لوتس" , price:"90 جنيه" , img: `${tresandlots}` },
        // { name:  "تريلتشي صنداي فاكهة" , price:"80 جنيه" , img: `${treletcesanfakha}` },

      ],
      // بولات
      8:[
        { name:  "ام علي" , price:"75 جنيه" , img: `${omali}` },
        { name:  "ام علي كبير" , price:"240 جنيه" , img: `${omalkber}` },
        { name:  "ارز باللبن لوتس" , price:"80 جنيه" , img: `${arzblots}` },
        { name:  "ارز باللبن مكسرات" , price:"80 جنيه" , img: `${arzbmksr}` },
        { name:  "ارز باللبن مانجو" , price:"80 جنيه" , img: `${bol5}` },
        { name:  "بولة ملفاي سكر" , price:"450 جنيه" , img: `${bol6}` },
        { name:  "بولة ملفاي مشمش" , price:"450 جنيه" , img: `${bol7}` },
        { name:  "بولة كراميل بورليه" , price:"425 جنيه" , img: `${bol8}` },
        { name:  "بولة برفترول شيكولاتة" , price:"480 جنيه" , img: `${bol9}` },
        { name:  "بولة ترافيل مانجو" , price:"335 جنيه" , img: `${bol10}` },
        // { name:  "ارز باللبن فواكة" , price:"70 جنيه" , img: `${orzlbnfakh}` },
        // { name:  "بولة بورليه" , price:" جنيه" , img: `${bolaborl}` },

      ],
      // ميلك كريم 
      9:[
        // { name:  "ميلك كريم ذبادي ميكس بيري" , price:"70 جنيه" , img: `${mkzbad}` },
        // { name:  "ميلك كريم ريد فيلفيت" , price:"70 جنيه" , img: `${mkrfelf}` },
        // { name:  "ميلك كريم اوريو" , price:"70 جنيه" , img: `${mlkkreoreo}` },
        // { name:  "ميلك كريم شوكلت" , price:"70 جنيه" , img: `${mkchoc}` },
        // { name:  "ميلك كريم لوتس" , price:"70 جنيه" , img: `${mklots}` },
        // { name:  "ميلك كريم فاكهة" , price:"70 جنيه" , img: `${milkcremfakha}` },
        { name:  "ميلك كريم ملفاي" , price:"85 جنيه" , img: `${mk1}` },
        { name:  "ميلك كريم تراميسيو" , price:"85 جنيه" , img: `${mk2}` },
        { name:  "ميلك كريم برفترول" , price:"85 جنيه" , img: `${mk3}` },
        { name:  "ميلك كريم تريليتشي لوتس" , price:"85 جنيه" , img: `${mk4}` },
        { name:  "ميلك كريم فراولة بستاشيو" , price:"85 جنيه" , img: `${mk5}` },
        { name:  "ميلك كريم مانجو" , price:"85 جنيه" , img: `${mk6}` },

      ],
      // نشيز كيك 
      10:[
        // { name:  "قطعة تشيز كيك سخن" , price:"80 جنيه" , img: `${tarchesc}` },
        // { name:  "قطعة تشيز كيك بارد" , price:"75 جنيه" , img: `${chescbrd}` },
        // { name:  "تورتة تشيز كيك" , price:" جنيه" , img: `${tortchec}` },
        // { name:  "سان سيباستيان" , price:"65 جنيه" , img: `${sansbas}` },
        // { name:  " تشيز كيك لوتس" , price:"80 جنيه" , img: `${waiting}` },
        { name:  " تشيز كيك بلوبيري" , price:"90 جنيه" , img: `${chc1}` },
        { name:  " تشيز كيك فراولة" , price:"90 جنيه" , img: `${chc2}` },
        { name:  " تشيز كيك لوتس" , price:"90 جنيه" , img: `${chc3}` },
        { name:  "سان سيباستيان ميكس بيري" , price:"80 جنيه" , img: `${chc4}` },
        { name:  "سان سيباستيان نوتيلا" , price:"80 جنيه" , img: `${chc5}` },
        { name:  " تشيز كيك بارد فراولة" , price:"75 جنيه" , img: `${chc6}` },
        { name:  " تشيز كيك بارد لوتس" , price:"75 جنيه" , img: `${chc7}` },
        { name:  " تشيز كيك بارد بلوبيري" , price:"75 جنيه" , img: `${chc8}` },

      ],
      // بلاك بيس 
      11:[
        { name:  "بلاك بيس ريد فيلفيت" , price:"150 جنيه" , img: `${bbrfelf}` },
        { name:  "بلاك بيس فستق" , price:"150 جنيه" , img: `${bbfstk}` },
        { name:  "بلاك بيس شوكلت" , price:"150 جنيه" , img: `${bbshoc}` },
        { name:  "بلاك بيس لوتس" , price:"150 جنيه" , img: `${bblots}` },
        { name:  "بلاك بيس فواكة" , price:"150 جنيه" , img: `${blcbesfakh}` },

      ],
      // انجلش كيك 
      12:[
        { name:  "قالب انجلش شوكلت" , price:"130 جنيه" , img: `${qlbengchoc}` },
        { name:  "قالب انجلش فانيليا" , price:"130 جنيه" , img: `${qlbengvan}` },
        // { name:  "قطعة كيك" , price:"35 جنيه" , img: `${qtacak}` },
        // { name:  "انجلش كيك اسبشيال كيندر" , price:" جنيه" , img: `${engcakspc}` },
        // { name:  "انجلش كيك اسبشيال لوتس" , price:" جنيه" , img: `${engcakspclot}` },
        // { name:  "انجلش كيك اسبشيال نوتيلا" , price:" جنيه" , img: `${engcakspcnotl}` },

      ],
      // بودابست رول
      13:[
        { name:  "بودابست رول ذبادي" , price:"70 جنيه" , img: `${bdb1}` },
        { name:  "بودابست رول فستق" , price:"70 جنيه" , img: `${bdb2}` },
        { name:  "بودابست رول شوكلت" , price:"70 جنيه" , img: `${bdb3}` },
        { name:  "بودابست رول ريد فيلفت" , price:"70 جنيه" , img: `${bdb4}` },

      ],
      // براونز استيك 
      14:[
        { name:  "براونز استيك روشيه" , price:"115 جنيه" , img: `${brws1}` },
        { name:  "براونز استيك كيندر" , price:"115 جنيه" , img: `${brws2}` },
        { name:  "براونز استيك فستق" , price:"115 جنيه" , img: `${brws3}` },
      ],
      // جاتوه
      15:[
        { name:  "جاتوه ايطالي" , price:"40 جنيه" , img: `${gthita}` },
        { name:  "جاتوه امريكان" , price:"65 جنيه" , img: `${gthamerc}` },
        // { name:  "جاتوه فرنساوي " , price:"60 جنيه" , img: `${gthfr}` },
        { name:  "جاتوه فرنساوي روشية" , price:"75 جنيه" , img: `${gthfrrosh}` },
        { name:  "جاتوه فرنساوي جالاكسي" , price:"75 جنيه" , img: `${gthfrglx}` },
        { name:  "جاتوه فرنساوي فادج" , price:"75 جنيه" , img: `${gthfrfadg}` },

      ],
      // جاتوه سواريه 
      16:[
        { name:  "سواريه 20 ق" , price:"325 جنيه" , img: `${soars20}` },
        { name:  "سواريه 40 ق" , price:"565 جنيه" , img: `${soak40}` },
        { name:  "مشكل سواريه & شرقي" , price:"535 جنيه" , img: `${mshsoarshrk}` },
        // { name:  "بوكس مادلين" , price:"250 جنيه" , img: `${boxsada}` },
        // { name:  "بوكس السعادة" , price:"400 جنيه" , img: `${boxsada}` },

      ],
      // ملفاي
      17:[
        { name:  "ملفاي لوتس" , price:"50 جنيه" , img: `${melflots}` },
        { name:  "ملفاي مربي" , price:"50 جنيه" , img: `${melfmrba}` },
        { name:  "ملفاي سكر" , price:"50 جنيه" , img: `${melfskr}` },
        { name:  "ملفاي شوكلت" , price:"50 جنيه" , img: `${melfchoc}` },
        { name:  "ملفاي مكسرات" , price:"50 جنيه" , img: `${melfmksr}` },
        { name:  "ملفاي رول باستري" , price:"75 جنيه" , img: `${mlf6}` },
        { name:  "قطعة ملفاي اسبشيال" , price:"80 جنيه" , img: `${qtamelfspc}` },

      ],
      // اكلير
      18:[
        { name:  "اكلير ميكس بيري" , price:"45 جنيه" , img: `${eclmksberr}` },
        { name:  "اكلير كيندر" , price:"45 جنيه" , img: `${eclkndr}` },
        { name:  "اكلير لوتس" , price:"45 جنيه" , img: `${ecllots}` },
        { name:  "اكلير شوكلت" , price:"45 جنيه" , img: `${eclchoc}` },
        { name:  "اكلير فاكهة" , price:"45 جنيه" , img: `${eclairfakh}` },
        { name:  "اكلير نوتيلا" , price:"45 جنيه" , img: `${eclnotl}` },
        { name:  "اكلير اسنيكرز" , price:"45 جنيه" , img: `${eclsnec}` },
        { name:  "اكلير كراميل" , price:"45 جنيه" , img: `${eclcram}` },

      ],
      // ديزرت
      19:[
        { name:  "باباة فواكة" , price:"75 جنيه" , img: `${babfwaka}` },
        { name:  "سانت نوريه" , price:"100 جنيه" , img: `${des2}` },
        { name:  "قطعة هوني كيك" , price:"75 جنيه" , img: `${qtahancak}` },
        { name:  "مولتن كيك" , price:"90 جنيه" , img: `${moltcak}` },
        { name:  "قطعة فاكهة" , price:"75 جنيه" , img: `${qtafakha}` },
        { name:  "قطعة فادج" , price:"80 جنيه" , img: `${qtafdg}` },
        { name:  "قطعة نوتيلا" , price:"115 جنيه" , img: `${qtanotl}` },
        { name:  "قطعة تيراميسو بستاشيو" , price:"75 جنيه" , img: `${tramesbestch}` },
        { name:  "قطعة تيراميسو" , price:"90 جنيه" , img: `${qtatrmsu}` },
        // { name:  "سانت نوريه شوكلت" , price:"100 جنيه" , img: `${santnorchoc}` },
        // { name:  "سانت نوريه بلوبيري" , price:"100 جنيه" , img: `${santnorblu}` },
        // { name:  "بودابيست رول" , price:"65 جنيه" , img: `${bodabestrol}` },
        // { name:  "كب صخر كيك" , price:"150 جنيه" , img: `${capskrcak}` },
        // { name:  "قطعة براونيز استيك" , price:"95 جنيه" , img: `${branzsteck}` },
      ],
      // اسبشيال بيس
      20:[
        { name:  "كب كيك شيكولاتة" , price:"50 جنيه" , img: `${espp1}` },
        { name:  "كب كيك فانيليا" , price:"50جنيه" , img: `${espp2}` },
        { name:  "قطعة مافن كيك" , price:"45 جنيه" , img: `${espp3}` },
        { name:  "قطعة كيك فانيليا" , price:"50 جنيه" , img: `${espp4}` },
        { name:  "قطعة كيك براوني" , price:"55 جنيه" , img: `${espp5}` },
        { name:  "قطعة كيك هاني" , price:"50 جنيه" , img: `${espp6}` },
        { name:  "قطعة كيك صخر" , price:"55 جنيه" , img: `${espp7}` },
        { name:  "قطعة كوكيز" , price:"65 جنيه" , img: `${espp8}` },
        { name:  "قطعة سابليه" , price:"60 جنيه" , img: `${espp9}` },
        { name:  "مارينج" , price:"75 جنيه" , img: `${espp10}` },
        { name:  "ماكرون 9 ق" , price:"125 جنيه" , img: `${espp11}` },
        // { name:  "كب كيك نوتيلا" , price:"45 جنيه" , img: `${capcaknotl}` },
        // { name:  "كب كيك لوتس" , price:"45 جنيه" , img: `${capcaklots}` },
        // { name:  "كب كيك كراميل" , price:"45 جنيه" , img: `${capcakcarm}` },
        // { name:  "كب كيك بلوبيري" , price:"45 جنيه" , img: `${capcakblu}` },
        // { name:  "كب كيك ريد فيلفيت" , price:"45 جنيه" , img: `${capcakfelf}` },
        // { name:  "ماكرون 24 ق" , price:"260 جنيه" , img: `${macron24}` },

      ],

      
      // الشيكولاتة والايس كريييييييييييييييييييييييييييييييم 

      // شيكولاته
      21:[
        { name:  "شيكولاتة سادة" , price:"450 جنيه" , img: `${cho1}` },
        { name:  "شيكولاتة كراميل" , price:"450 جنيه" , img: `${chocaraml}` },
        { name:  "شيكولاتة لوز" , price:"450 جنيه" , img: `${choloz}` },
        { name:  "شيكولاتة بندق" , price:"450 جنيه" , img: `${chobndk}` },
        { name:  "شيكولاتة اوريو" , price:"450 جنيه" , img: `${chooreo}` },
        { name:  "شيكولاتة 6 بندقات" , price:"450 جنيه" , img: `${cho6bndk}` },
        { name:  "شيكولاتة كريمة حليب" , price:"450 جنيه" , img: `${chocremhalb}` },
        { name:  "شيكولاتة كريمة بندق" , price:"450 جنيه" , img: `${chocrebndk}` },
        { name:  "شيكولاتة كريمة قهوة" , price:"450 جنيه" , img: `${chocremkahwa}` },
        { name:  "شيكولاتة قلب مكسرات" , price:"450 جنيه" , img: `${choalbmksr}` },
        { name:  "شيكولاتة سبيكة مكسرات" , price:"450 جنيه" , img: `${chosabkmksr}` },
        { name:  "شيكولاتة نوتيلا مكسرات" , price:"450 جنيه" , img: `${chonotilmksr}` },
        { name:  "شيكولاتة حشو طبيعي" , price:"450 جنيه" , img: `${chohashwtabeie}` },
      ],


     
    //  ايس كريك كيك 
      22:[
        { name:  "ايس كريم كيك (فراولة & مانجو)" , price:"575 جنيه" , img: `${iccfrawlmang}` },
        { name:  "ايس كريم كيك (اسنيكرز & كراميل)" , price:"575 جنيه" , img: `${iccsnec}` },
        { name:  "ايس كريم كيك (روشية)" , price:"575 جنيه" , img: `${iccchoc}` },
        { name:  "ايس كريم كيك (لوتس)" , price:"575 جنيه" , img: `${icecklots}` },
        { name:  "ايس كريم كيك (كيت كات)" , price:"575 جنيه" , img: `${icckitkat}` },
        { name:  "ايس كريم كيك (شوكلت دبي)" , price:"555 جنيه" , img: `${iccchocdbu}` },
        { name:  "ايس كريم كيك (اوريو)" , price:"535 جنيه" , img: `${icecoreo}` },
        { name:  "ايس كريم كيك (ذبادي توت)" , price:"525 جنيه" , img: `${iceczbadtot}` },
        { name:  "ايس كريم كيك (فستق)" , price:"575 جنيه" , img: `${icefostk}` },
        { name:  "تورتة ايس (شوكلت & فانيليا)" , price:"575 جنيه" , img: `${icechocfan}` },
      ],
      // الايس كريم 
      23:[
        { name:  "بولة ايس كريم" , price:"35 جنيه" , img: `${bolice}` },
        { name:  "بولة ايس كريم بسكوت" , price:"40 جنيه" , img: `${bolicebask}` },
        { name:  "ايس كريم كيلو" , price:"350 جنيه" , img: `${iceckelo}` },
        // { name:  "جار ايس كريم" , price:" جنيه" , img: `${garice}` },

      ],


      // شرقيييييييييييييييي


// بسبوسة
          24: [
        { name:  "بسبوسة سادة" , price: "260 جنيه" , img:  `${basbosasada}`},
        { name:  " بسبوسة بندق" , price:  "310 جنيه" , img: `${basbosabondk}` },
        { name:  "بسبوسة مكسرات" , price: "310 جنيه" , img: `${basmksr}`},
        { name:  "بسبوسة تريلتشي" , price: "350 جنيه" , img:  `${basbosatreltche}`},
        { name:  "بسبوسة تركي كريمة" , price: "310 جنيه" , img: `${basturcre}`},
        // { name:  "بسبوسة تركي نوتيلا" , price:  "330 جنيه" , img: `${basbosaturkinotila}` },
        // { name:"بسبوسة تركي لوتس" , price: "385 جنيه" , img: `${basbosaturkilots}`},
      ],
      // كنافة 
      25: [
        { name:  "كنافة بصمة سادة" , price:"320 جنيه" , img: `${knbasmsada}` },
        { name:  "كنافة بصمة عجوة" , price:"360 جنيه" , img: `${knbsmaagwa}` },
        { name:  "كنافة بصمة بندق" , price:"500 جنيه" , img: `${knbasmbondok}` },
        { name:  "كنافة بصمة عين جمل" , price:"500 جنيه" , img: `${knbasmgmal}` },
        { name:  "كنافة بصمة فستق" , price:"1500 جنيه" , img: `${knbasmfostok}` },
        { name:  "كنافة بصمة ماكس" , price:"650 جنيه" , img: `${knbasmmaks}` },
        { name:  "كنافة بصمة كاجو" , price:"500 جنيه" , img: `${knbasmajajo}` },
        { name:  "كنافة بورمة ماكس" , price:"650 جنيه" , img: `${knbormmax}` },
        { name:  "كنافة بورمة فستق" , price:"1500 جنيه" , img: `${knbormfostk}` },
        { name:  "كنافة سيجار سادة" , price:"350 جنيه" , img: `${knsegsad}` },
        { name:  "كنافة سيجار بندق" , price:"470 جنيه" , img: `${knsegarbndk}` },
        { name:  "كنافة اساور بندق" , price:"360 جنيه" ,img: `${knfaswrbndk}` },
        { name:  "كنافة اساور نوتيلا" , price:"375 جنيه" ,img: `${knaswrnotila}` },
        { name:  "كنافة اساور لوكس" , price:"475 جنيه" ,img: `${knasawrloks}` },
        { name:  "كنافة كريمة" , price:"310 جنيه" , img: `${knkrem}` },
        { name:  "كنافة قشطة" , price:"350 جنيه" , img: `${knesh}` },
        { name:  "كنافة مانجو" , price:"300 جنيه" ,img: `${knfmango}` },
        { name:  "كنافة نوتيلا" , price:"350 جنيه" , img: `${knnotil}` },
        { name:  "كنافة كورنيه" , price:"375 جنيه" , img: `${knkorne}` },
      ],

      // شرقيات 
      26: [
        { name:  "هريسة شامي" , price:"320 جنيه" , img: `${hressham}` },
        { name:  "هريسة زبيب" , price:"260 جنيه" , img: `${hreszbeb}` },
        { name:  "هريسة مكسرات" , price:"360 جنيه" , img: `${hresa}` },
        { name:  "رموش" , price:"350 جنيه" , img: `${rmosh}` },
        { name:  "شكلمة" , price:"360 جنيه" , img: `${shklma}` },
        { name:  "بسيمة" , price:"360 جنيه" , img: `${bsema}` },
        { name:  "شهد" , price:"260 جنيه" , img: `${shhd}` },
        { name:  "اسبانيا" , price:"260 جنيه" , img: `${esp}` },
        { name:  "نمورة" , price:"260 جنيه" , img: `${nmora}` },
        { name:  "دلوعة" , price:"350 جنيه" , img: `${daloaa}` },
        { name:  "رواني" , price:"300 جنيه" , img: `${rowni}` },
        { name:  "عزيزة" , price:"270 جنيه" , img: `${aziza}` },
        { name:  "لينزا بلح" , price:"300 جنيه" , img: `${lenzblh}` },
        { name:  "لينزا كريمة" , price:"300 جنيه" , img: `${lenzcrem}` },
        { name:  "بلح الشام سادة" , price:"225 جنيه" , img: `${blhshamsad}` },
        { name:  "بلح الشام كريمة" , price:"275 جنيه" , img: `${balhshamkr}` },
        { name:  "بلح الشام نوتيلا" , price:"275 جنيه" , img: `${blhshanotil}` },
        { name:  "بلح الشام اسبيشيال" , price:"275 جنيه" , img: `${balhshamesp}` },
        { name:  "مشبك" , price:"250 جنيه" , img: `${mshbk}` },

      ],
      // فورم 
      27: [
        { name:  "فورمة بسبوسة سادة" , price:"320 جنيه" , img: `${forbassad}` },
        { name:  "فورمة بسبوسة بندق" , price:"365 جنيه" , img: `${forbasbnd}` },
        { name:  "فورمة بسبوسة مكسرات" , price:"365 جنيه" , img: `${fobasmks}` },
        { name:  "فورمة بقلاوة هاف" , price:"425 جنيه" , img: `${fobklhaf}` },
        { name:  "فورمة بقلاوة مكسرات" , price:"520 جنيه" , img: `${forbklmks}` },
        { name:  "فورمة بقلاوة سوري" , price:"400 جنيه" , img: `${forbklsori}` },
        { name:  "فورمة كنافة سوري" , price:"410 جنيه" , img: `${foknfsor}` },
        { name:  "فورمة كنافة  كريمة", price:"375 جنيه" , img: `${forknfcrem}` },
        { name:  "فورمة دلوعة 8 سيزون" , price:"390 جنيه" , img: `${formadaloaa8seson}` },
        { name:  "فورمة فور سيزون" , price:"390 جنيه" , img: `${formadaloaa4seson}` },
        { name:  "بوكس شرقي صوصات" , price:"475 جنيه" , img: `${elbasharkisosat}` },
        { name:  "بوكس بقلاوة تركي" , price:"750 جنيه" , img: `${elbabeklawaturki}` },

      ],
      

      // البقلاوة 
      28:[
        { name:  "بقلاوة بغاشة" , price:"330 جنيه" , img: `${bklbgash}` },
        { name:  "بقلاوة كريمة" , price:"320 جنيه" , img: `${bklcrem}` },
        { name:  "بقلاوة قشطة" , price:"425 جنيه" , img: `${bklesht}` },
        { name:  "بقلاوة سادة" , price:"260 جنيه" , img: `${bklsda}` },
        { name:  "بقلاوة لوز" , price:"325 جنيه" , img: `${bklloz}` },
        { name:  " بقلاوة عش مكسرات" , price:"425 جنيه" , img: `${bklsh}` },
        { name:  "بقلاوة مشط مكسرات" , price:"425 جنيه" , img: `${bklmsht}` },
        { name:  "بقلاوة غوايش عين جمل" , price:"520 جنيه" , img: `${bklgaesh}` },
        { name:  "بقلاوة حجاب عين جمل" , price:"575 جنيه" , img: `${bklhggml}` },
        { name:  "بقلاوة سيخ مكسرات" , price:"575 جنيه" , img: `${bklsegh}` },
        { name:  "بقلاوة سكينة قرفة" , price:"310 جنيه" , img: `${bklskerf}` },
        { name:  "بقلاوة لقمة الباشا" , price:"590 جنيه" , img: `${bklbasha}` },

      ],
     
    //  البيكريييييييييييييييييييييييييييييييييييييييي
    
    // المخبوزات
    29:[
      { name:  "باتون ساليه 300جم" , price:"90 جنيه" , img: `${mkh1}` },
      { name:  "قراقيش سادة 300جم" , price:"90 جنيه" , img: `${mkh2}` },
      { name:  "قراقيش عجوة 300جم" , price:"90 جنيه" , img: `${mkh3}` },
      { name:  "قرص سادة 300جم" , price:"90 جنيه" , img: `${mkh4}` },
      { name:  "قرص عجوة 300جم" , price:"80 جنيه" , img: `${mkh5}` },
      { name:  "تراسينا 300جم" , price:"75 جنيه" , img: `${mkh6}` },
      { name:  "بالمية 300جم" , price:"120 جنيه" , img: `${mkh7}` },
      { name:  "محوجة 500جم" , price:"160 جنيه" , img: `${mkh8}` },
      { name:  "كوكيز 500جم" , price:"170 جنيه" , img: `${mkh9}` },

    ],

    //  الفطائر
    30:[
      { name:  "فطير سادة" , price:"220 جنيه" , img: `${ftrsad}` },
      { name:  "فطير رومي" , price:"300 جنيه" , img: `${ftrrom}` },
      { name:  "فطير كريمة مكسرات" , price:"250 جنيه" , img: `${ftkremks}` },
      { name:  "فطير بلح" , price:"230 جنيه" , img: `${fterblh}` },
      { name:  "فطير لوتس" , price:"300 جنيه" , img: `${ftrlots}` },
      { name:  "فطير ميني بالسكر" , price:"175 جنيه" , img: `${ftrminskr}` },
      // { name:  "فطير حلو" , price:" جنيه" , img: `${ftrhlw}` },

    ],

    // المعجنات
     31:[
      { name:  "فوكاشيا طماطم" , price:"70 جنيه" , img: `${mog1}` },
      { name:  "فوكاشيا بيستو" , price:"70 جنيه" , img: `${mog2}` },
      { name:  "بوكس بريك فاست" , price:"110 جنيه" , img: `${mog3}` },
      { name:  "بوكس ساليزون ميكس" , price:"360 جنيه" , img: `${mog4}` },
      { name:  "بوكس ميني بيتزا" , price:"310 جنيه" , img: `${mog5}` },
      { name:  "بوكس كانبيه" , price:"350 جنيه" , img: `${mog6}` },
      { name:  "بوكس ميني فطاير ميكس" , price:"260 جنيه" , img: `${mog7}` },
      { name:  "بوكس ميني ساندوتش مشكل" , price:"255 جنيه" , img: `${mog8}` },

     ],
    //  دونات وسينامون
    32:[
      { name:  "ميني سينابون" , price:"60 جنيه" , img: `${ds1}` },
      { name:  "دونات كيندر" , price:"65 جنيه" , img: `${ds2}` },
      { name:  "دونات لوتس" , price:"70 جنيه" , img: `${ds3}` },
      { name:  "دونات نوتيلا" , price:"60 جنيه" , img: `${ds4}` },
      { name:  "دونات فستق" , price:"70 جنيه" , img: `${ds5}` },
      { name:  "سينامون شوكلت" , price:"75 جنيه" , img: `${ds6}` },
      { name:  "سينامون قرفة" , price:"70 جنيه" , img: `${ds7}` },
      { name:  "سينامون بستاشيو" , price:"85 جنيه" , img: `${ds8}` },
      { name:  "بوكس ميني دونات" , price:"255 جنيه" , img: `${ds9}` },
      { name:  "بوكس ميني بامبولوني" , price:"295 جنيه" , img: `${ds10}` },

    ],
    // كرواسون
    33:[
      { name:  "كرواسون زبدة" , price:"55 جنيه" , img: `${krw1}` },
      { name:  "كرواسون زعتر" , price:"55 جنيه" , img: `${krw2}` },
      { name:  "كرواسون كيري" , price:"75 جنيه" , img: `${krw3}` },
      { name:  "كرواسون شوكلت" , price:"80 جنيه" , img: `${krw4}` },
      { name:  "كرواسون لوز" , price:"80 جنيه" , img: `${krw5}` },
      { name:  "كرواسون رول نوتيلا" , price:"80 جنيه" , img: `${krw6}` },
      { name:  "كرواسون رول بستاشيو" , price:"95 جنيه" , img: `${krw7}` },
      { name:  "ساندوتش كرواسون تركي مدخن" , price:"95 جنيه" , img: `${krw8}` },
      { name:  "ساندوتش كرواسون فاهيتا فراخ" , price:"85 جنيه" , img: `${krw9}` },
      { name:  "ساندوتش كرواسون تونة" , price:"90 جنيه" , img: `${krw10}` },
      { name:  "ساندوتش كرواسون جبنة لحوم" , price:"75 جنيه" , img: `${waiting}` },
      { name:  "ساندوتش كرواسون مكس جبن" , price:"75 جنيه" , img: `${waiting}` },
      { name:  "بوكس ميني كرواسون حادق" , price:"275 جنيه" , img: `${krw13}` },
      { name:  "بوكس ميني كرواسون حلو" , price:"275 جنيه" , img: `${krw14}` },

    ],     
    // دانش
    34:[
      { name:  "دانش زيتون و زعتر" , price:"50 جنيه" , img: `${dan1}` },
      { name:  "دانش سوسيس و بسطرمة" , price:"60 جنيه" , img: `${dan2}` },
      { name:  "دانش فاكهة" , price:"65 جنيه" , img: `${dan3}` },
      { name:  "دانش كريم بورليه" , price:"70 جنيه" , img: `${dan4}` },
      { name:  "دانش هازلنت" , price:"65 جنيه" , img: `${dan5}` },
      { name:  "بوكس ميني دانش حلو" , price:"260 جنيه" , img: `${dan6}` },
      { name:  "بوكس ميني دانش حادق" , price:"255 جنيه" , img: `${dan7}` },
      { name:  "بان شوكلت" , price:"65 جنيه" , img: `${dan8}` },
      { name:  "بان سويس" , price:"70 جنيه" , img: `${dan9}` },

    ],

    // النواعمممممممممممممممممممممممممممممممممممممممممممممممممممم
    // الكعك
    35:[
      { name:  "كعك سادة" , price:"330 جنيه" , img: `${kaaksad}` },
      { name:  "كعك ملبن" , price:"305 جنيه" , img: `${kaakmlbn}` },
      { name:  "كعك عجمية" , price:"320 جنيه" , img: `${kaakagmia}` },
      { name:  "كعك عجمية عين جمل" , price:"360 جنيه" , img: `${kaakagmgamal}` },
      { name:  "كعك عين جمل" , price:"380 جنيه" , img: `${kaakgamal}` },
      { name:  "كعك ملبن مكسرات" , price:"360 جنيه" , img: `${kaakmlbnmks}` },
      { name:  "غريبة لوز" , price:"340 جنيه" , img: `${ghreba}` },

    ],
// البسكويت
    36:[
      // { name:  "بسكويت" , price:" جنيه" , img: `${bask}` },
      { name:  "بسكويت نشادر" , price:"270 جنيه" , img: `${basknash}` },
      { name:  "بسكويت وايت شوكلت & فستق" , price:"370 جنيه" , img: `${bskwchocfs}` },
      // { name:  "بسكويت برتقال" , price:" جنيه" , img: `${bskbrtkal}` },
      // { name:  "بسكويت جوز هند" , price:" جنيه" , img: `${bskgoz}` },

    ],
    // بيتي فور وسابليه
    37:[
      { name:  "بيتي فور ابيض" , price:"360 جنيه" , img: `${btfabiad}` },
      { name:  "بيتي فور شيكولاتة" , price:"360 جنيه" , img: `${btfchoc}` },
      { name:  "بيتي فور صوصات" , price:"360 جنيه" , img: `${btfsos}` },
      { name:  "كوكيز صوصات" , price:"400 جنيه" , img: `${coksos}` },
      { name:  "سابليه" , price:"400 جنيه" , img: `${able}` },
      { name:  "ميني تارت" , price:"400 جنيه" , img: `${minitart}` },

    ],
   
      
      // 19:[
      //   { name:  "تارت برفترول لوتس" , price:"450 جنيه" , img: `${trtbrflots}` },
      //   { name:  "تارت برفترول شوكلت" , price:"420 جنيه" , img: `${trtbrfchoc}` },
      //   { name:  "ق تارت فاكهة" , price:"75 جنيه" , img: `${qtatartfakha}` },
      //   { name:  "ق تارت لوتس" , price:"75 جنيه" , img: `${qtatrtlots}` },
      //   { name:  "ق تارت نوتيلا" , price:"75 جنيه" , img: `${qtatrtnotl}` },

      // ],
     
    
      
     
     
     
     
     
     
      // 29:[
      //   { name:  "مكسرات بيكان" , price:" جنيه" , img: `${mksbekan}` },
      //   { name:  "مكسرات فستق" , price:" جنيه" , img: `${mksfstk}` },
      //   { name:  "مكسرات مملحة ميكس" , price:" جنيه" , img: `${mksmmmkx}` },

      // ],
      // 30:[
      //   { name:  "باتيه جبنة" , price:"60 جنيه" , img: `${bategbn}` },
      //   { name:  "باتيه بسطرمة" , price:"65 جنيه" , img: `${batbastrm}` },
      //   { name:  "كرواسون سادة" , price:"45 جنيه" , img: `${korsad}` },
      //   { name:  "كرواسون رومي مدخن" , price:"90 جنيه" , img: `${kortommdkh}` },
      //   { name:  "بيتزا سلايس" , price:"65 جنيه" , img: `${pizzaslic}` },
      //   { name:  "بوكس بريك فاست" , price:"100 جنيه" , img: `${brekfst}` },

      // ],
          
      // 33:[
      //   { name:  "بوكس ساليزون كبير" , price:"400 جنيه" , img: `${salkber}` },
      //   { name:  "بوكس ساليزون صغير" , price:"200 جنيه" , img: `${salskher}` },
      //   { name:  "بوكس ميني ساندويتش" , price:"200 جنيه" , img: `${minisadw}` },
      //   { name:  "بوكس مناقيش لبناني" , price:"275 جنيه" , img: `${mnakesh}` },

      // ],
      
      // 35:[
      //   { name:  "بوكس ميني دوناتس" , price:"220 جنيه" , img: `${elbaminidnts}` },
      //   { name:  "بوكس ميني بومبولوني" , price:"260 جنيه" , img: `${elbaminibomb}` },
      //   { name:  "بوكس ميني بومبلوني بالسكر" , price:"175 جنيه" , img: `${elbaminibombskr}` },
      //   { name:  "قطعة دوناتس" , price:"60 جنيه" , img: `${qtadonts}` },
      //   { name:  "قطعة بومبلوني نوتيلا" , price:"60 جنيه" , img: `${qtabombcrem}` },
      //   { name:  "قطعة بومبلوني كريمة" , price:"65 جنيه" , img: `${qtabombnotil}` },
      //   { name:  "سينابون" , price:"65 جنيه" , img: `${senabon}` },
      //   { name:  "ميكس سينابون" , price:"75 جنيه" , img: `${mkssenab}` },
      //   { name:  "دانش لوز" , price:"75 جنيه" , img: `${danshloz}` },
      //   { name:  "دانش ضفيرة" , price:"75 جنيه" , img: `${danshdfer}` },

      // ],
     

         };

    // const allProducts = Object.values(products).flat(); // دمج جميع المنتجات
const allProducts = useMemo(() => Object.values(products).flat(), [products]);

// فلترة المنتجات بناءً على نص البحث (جميع المنتجات دائمًا)
const searchFilteredProducts = allProducts.filter((product) =>
  product.name.toLowerCase().includes(searchText.toLowerCase())
);

// تحديد المنتجات التي يتم عرضها بناءً على التصنيف
const categoryFilteredProducts = products[selectedSubCategory] || [];

// تحديد المنتجات التي ستُعرض في الواجهة
const displayedProducts = 
  searchText.length > 0 
    ? searchFilteredProducts 
    : selectedSubCategory 
      ? categoryFilteredProducts 
      : [];

      







      const ProductCard = React.memo(({ product }) => {
        const [loading, setLoading] = useState(true);
      
        return (
          <div className="product-card-par">
            <div className="product" style={{ position: 'relative' }}>
              
              {/* صورة المنتج */}
              <img
                onLoad={() => setLoading(false)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: loading ? 0.5 : 1,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '10px', // موجود في تنسيقاتك
                }}
                src={product.img}
                alt={product.name || 'Product Image'}
                loading="lazy"
              />
      
              {/* مؤشر التحميل */}
              {/* {loading && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#888',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Loading...
                </div>
              )} */}

{loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
            </div>
      
            {/* معلومات المنتج تحت الصورة */}
            <div
              style={{
                backgroundColor: "#00586b",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "132px",
                height: "66px",
                color: "#e1a55b",
              }}
            >
              <p
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  padding: "0 0 4px 0",
                  margin: "0 3px",
                }}
              >
                {product.name}
              </p>
              <p
                style={{
                  fontFamily: "Dancing Script",
                  textAlign: "center",
                  padding: "4px 0 0 0",
                }}
              >
                {product.price}
              </p>
            </div>
          </div>
        );
      });







      return (
        <div className="product-par">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : null}
        </div>
      );
}

export default Products



















