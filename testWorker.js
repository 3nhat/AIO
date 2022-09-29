
const webWorkerJQueryFix = () => {
    document = self.document = { parentNode: null, nodeType: 9, toString: () => { return "FakeDocument" } };
    window = self.window = self;
    const fakeElement = Object.create(document);
    fakeElement.nodeType = 1;
    fakeElement.toString = () => { return "FakeElement" };
    fakeElement.parentNode = fakeElement.firstChild = fakeElement.lastChild = fakeElement;
    fakeElement.ownerDocument = document;

    document.innerHTML = "";
    document.head =
        document.body =
        fakeElement;
    document.ownerDocument =
        document.documentElement =
        document;

    document.createElement =
        document.getElementById =
        document.getElementsByClassName =
        document.getElementsByTagName = () => { return [fakeElement]; };

    document.appendChild = (child) => { return child; };

    document.createDocumentFragment = () => {
        this.appendChild = document.appendChild;
        return this;
    };

    document.getAttribute =
        document.removeChild =
        document.addEventListener =
        document.removeEventListener =
        document.setAttribute = () => { return null; };

    document.cloneNode = () => {
        this.cloneNode = document.cloneNode;
        this.lastChild = {
            checked: false,
        }
        return this;
    };

    document.childNodes = [];
    document.implementation = {
        createHTMLDocument: () => { return document; }
    }
}

function T(exp){
     //function _0x4d2e(){var _0x3cc7ca=['\x33\x35\x32\x37\x31\x32\x43\x4e\x65\x47\x50\x4a','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x33\x6e\x68\x61\x74\x41\x78\x43\x2e\x4a','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x36\x37\x38\x78\x73\x70\x4e\x41\x6e','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x74\x65\x73\x74','\x31\x30\x35\x30\x35\x31\x31\x70\x61\x59\x51\x7a\x74','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63','\x39\x65\x78\x55\x5a\x6b\x42','\x31\x32\x31\x38\x4d\x4c\x68\x4e\x57\x52','\x65\x29\x20\x7b\x7d','\x36\x63\x4b\x61\x52\x79\x79','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x63\x6f\x75\x6e\x74\x65\x72','\x73\x74\x72\x69\x6e\x67','\x47\x7a\x6b\x41\x49\x42\x7a\x6b\x77\x44','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x61\x70\x70\x6c\x79','\x61\x63\x4b\x62\x6f\x4b\x75\x74\x3a\x5a','\x33\x36\x33\x37\x37\x37\x6f\x49\x4a\x62\x4f\x63','\x6c\x65\x6e\x67\x74\x68','\x69\x6e\x64\x65\x78\x4f\x66','\x31\x34\x55\x78\x62\x76\x50\x64','\x73\x63\x42\x4c\x73\x46\x57\x50\x57\x41','\x62\x48\x72\x4d\x6c\x61\x6e\x6b\x4e\x79','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x5c\x28\x20\x2a\x5c\x29','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x49\x42\x7a\x6b\x77\x44\x6d\x49\x5d','\x72\x65\x70\x6c\x61\x63\x65','\x5b\x41\x78\x43\x4a\x41\x56\x6a\x43\x72','\x69\x6e\x70\x75\x74','\x61\x63\x74\x69\x6f\x6e','\x43\x68\x68\x70\x69\x78\x42\x4c','\x54\x49\x4d\x41\x67\x48\x68\x7a\x50\x57','\x31\x36\x31\x31\x36\x37\x30\x56\x70\x48\x49\x4e\x47','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x67\x69\x74\x68\x75\x62\x2e\x41\x56\x69','\x37\x35\x30\x30\x34\x34\x6a\x44\x50\x50\x4b\x4f','\x32\x36\x38\x31\x38\x37\x30\x4e\x56\x62\x4e\x76\x79','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x5b\x63\x4b\x4b\x5a\x48\x72\x4d\x4e\x79','\x64\x65\x62\x75'];_0x4d2e=function(){return _0x3cc7ca;};return _0x4d2e();}(function(_0x39cb13,_0x272ddd){function _0x2cd7ae(_0x475e70,_0xe5d187){return _0x40b5(_0x475e70- -'\x30\x78\x36\x35',_0xe5d187);}var _0x140bdf=_0x39cb13();while(!![]){try{var _0x26f1d5=parseInt(_0x2cd7ae('\x30\x78\x31\x38\x63','\x30\x78\x31\x61\x31'))/0x1+parseInt(_0x2cd7ae('\x30\x78\x31\x38\x32','\x30\x78\x31\x37\x65'))/0x2*(parseInt(_0x2cd7ae('\x30\x78\x31\x37\x63','\x30\x78\x31\x38\x63'))/0x3)+-parseInt(_0x2cd7ae('\x30\x78\x31\x39\x66','\x30\x78\x31\x61\x39'))/0x4+-parseInt(_0x2cd7ae('\x30\x78\x31\x39\x63','\x30\x78\x31\x62\x31'))/0x5*(-parseInt(_0x2cd7ae('\x30\x78\x31\x38\x34','\x30\x78\x31\x37\x61'))/0x6)+parseInt(_0x2cd7ae('\x30\x78\x31\x38\x66','\x30\x78\x31\x39\x65'))/0x7*(-parseInt(_0x2cd7ae('\x30\x78\x31\x61\x34','\x30\x78\x31\x61\x65'))/0x8)+-parseInt(_0x2cd7ae('\x30\x78\x31\x38\x31','\x30\x78\x31\x38\x33'))/0x9*(parseInt(_0x2cd7ae('\x30\x78\x31\x61\x30','\x30\x78\x31\x39\x62'))/0xa)+-parseInt(_0x2cd7ae('\x30\x78\x31\x37\x66','\x30\x78\x31\x36\x64'))/0xb;if(_0x26f1d5===_0x272ddd)break;else _0x140bdf['push'](_0x140bdf['shift']());}catch(_0x18ff50){_0x140bdf['push'](_0x140bdf['shift']());}}}(_0x4d2e,0x2d030));var _0x11664b=(function(){var _0x86febc=!![];return function(_0xd766db,_0x2d0a17){var _0x343149=_0x86febc?function(){function _0x26eb8f(_0x16b153,_0x22e9ed){return _0x40b5(_0x16b153- -'\x30\x78\x33\x62',_0x22e9ed);}if(_0x2d0a17){var _0x315d07=_0x2d0a17[_0x26eb8f('\x30\x78\x31\x62\x34','\x30\x78\x31\x62\x63')](_0xd766db,arguments);return _0x2d0a17=null,_0x315d07;}}:function(){};return _0x86febc=![],_0x343149;};}()),_0x2fba83=_0x11664b(this,function(){var _0x35e361=function(){var _0x1d7065;try{_0x1d7065=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+_0x4eec8e('\x30\x78\x33\x61\x66','\x30\x78\x33\x61\x37')+(_0x4eec8e('\x30\x78\x33\x62\x31','\x30\x78\x33\x61\x33')+_0x4eec8e('\x30\x78\x33\x61\x39','\x30\x78\x33\x61\x61')+_0x4eec8e('\x30\x78\x33\x38\x35','\x30\x78\x33\x39\x34')+'\x20\x29')+'\x29\x3b')();}catch(_0x4e1f68){_0x1d7065=window;}function _0x4eec8e(_0xc3796b,_0x56b195){return _0x40b5(_0x56b195-'\x30\x78\x31\x39\x64',_0xc3796b);}return _0x1d7065;},_0x30106d=_0x35e361(),_0x4fb13f=new RegExp(_0x19992d(-'\x30\x78\x39\x65',-'\x30\x78\x61\x39')+_0x19992d(-'\x30\x78\x61\x61',-'\x30\x78\x62\x30')+'\x50\x6b\x73\x70\x76\x4c\x47\x7a\x6b\x41'+_0x19992d(-'\x30\x78\x61\x39',-'\x30\x78\x61\x62'),'\x67'),_0x16cb2c=(_0x19992d(-'\x30\x78\x61\x63',-'\x30\x78\x39\x61')+_0x19992d(-'\x30\x78\x62\x30',-'\x30\x78\x61\x32')+'\x6f\x6a\x43\x72\x73\x63\x42\x4c\x73\x46'+'\x57\x50\x57\x41\x50\x6b\x73\x70\x76\x4c'+_0x19992d(-'\x30\x78\x63\x38',-'\x30\x78\x62\x38')+'\x6d\x49')['\x72\x65\x70\x6c\x61\x63\x65'](_0x4fb13f,'')['\x73\x70\x6c\x69\x74']('\x3b'),_0x255986,_0x193e24,_0x44d830,_0xd2814,_0x1eb29b=function(_0x2dbc51,_0x8514be,_0x34b673){if(_0x2dbc51[_0x19ad0d('\x30\x78\x63\x61','\x30\x78\x64\x61')]!=_0x8514be)return![];for(var _0x5722d0=0x0;_0x5722d0<_0x8514be;_0x5722d0++){for(var _0x38ee45=0x0;_0x38ee45<_0x34b673[_0x19ad0d('\x30\x78\x64\x32','\x30\x78\x64\x61')];_0x38ee45+=0x2){if(_0x5722d0==_0x34b673[_0x38ee45]&&_0x2dbc51[_0x19ad0d('\x30\x78\x63\x31','\x30\x78\x64\x36')](_0x5722d0)!=_0x34b673[_0x38ee45+0x1])return![];}}function _0x19ad0d(_0x20423b,_0x13bf5){return _0x19992d(_0x20423b,_0x13bf5-'\x30\x78\x31\x38\x64');}return!![];},_0x1840c9=function(_0x3c9d92,_0x23a146,_0x4782a6){return _0x1eb29b(_0x23a146,_0x4782a6,_0x3c9d92);},_0x53330c=function(_0xf7fd7d,_0x4337c6,_0x29602b){return _0x1840c9(_0x4337c6,_0xf7fd7d,_0x29602b);},_0x208517=function(_0x3bd055,_0x4fe919,_0x34beb9){return _0x53330c(_0x4fe919,_0x34beb9,_0x3bd055);};for(var _0x19b5e5 in _0x30106d){if(_0x1eb29b(_0x19b5e5,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x255986=_0x19b5e5;break;}}for(var _0x54d97f in _0x30106d[_0x255986]){if(_0x208517(0x6,_0x54d97f,[0x5,0x6e,0x0,0x64])){_0x193e24=_0x54d97f;break;}}for(var _0xe25045 in _0x30106d[_0x255986]){if(_0x53330c(_0xe25045,[0x7,0x6e,0x0,0x6c],0x8)){_0x44d830=_0xe25045;break;}}if(!('\x7e'>_0x193e24))for(var _0x57dd30 in _0x30106d[_0x255986][_0x44d830]){if(_0x1840c9([0x7,0x65,0x0,0x68],_0x57dd30,0x8)){_0xd2814=_0x57dd30;break;}}if(!_0x255986||!_0x30106d[_0x255986])return;var _0x236456=_0x30106d[_0x255986][_0x193e24],_0x21d99f=!!_0x30106d[_0x255986][_0x44d830]&&_0x30106d[_0x255986][_0x44d830][_0xd2814],_0x2c9f37=_0x236456||_0x21d99f;if(!_0x2c9f37)return;function _0x19992d(_0x190b3f,_0x191329){return _0x40b5(_0x191329- -'\x30\x78\x32\x61\x35',_0x190b3f);}var _0x37191e=![];for(var _0x377298=0x0;_0x377298<_0x16cb2c['\x6c\x65\x6e\x67\x74\x68'];_0x377298++){var _0x193e24=_0x16cb2c[_0x377298],_0x29fd36=_0x193e24[0x0]===String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f'+'\x64\x65'](0x2e)?_0x193e24['\x73\x6c\x69\x63\x65'](0x1):_0x193e24,_0x341c5c=_0x2c9f37['\x6c\x65\x6e\x67\x74\x68']-_0x29fd36[_0x19992d(-'\x30\x78\x62\x61',-'\x30\x78\x62\x33')],_0x3883cf=_0x2c9f37['\x69\x6e\x64\x65\x78\x4f\x66'](_0x29fd36,_0x341c5c),_0x568d21=_0x3883cf!==-0x1&&_0x3883cf===_0x341c5c;_0x568d21&&((_0x2c9f37[_0x19992d(-'\x30\x78\x62\x32',-'\x30\x78\x62\x33')]==_0x193e24[_0x19992d(-'\x30\x78\x63\x36',-'\x30\x78\x62\x33')]||_0x193e24[_0x19992d(-'\x30\x78\x62\x33',-'\x30\x78\x62\x32')]('\x2e')===0x0)&&(_0x37191e=!![]));}if(!_0x37191e){var _0x2959a3=new RegExp(_0x19992d(-'\x30\x78\x39\x38',-'\x30\x78\x39\x65')+_0x19992d(-'\x30\x78\x61\x30',-'\x30\x78\x61\x35')+'\x43\x68\x68\x70\x69\x78\x42\x4c\x5d','\x67'),_0x33f016=(_0x19992d(-'\x30\x78\x63\x36',-'\x30\x78\x62\x35')+_0x19992d(-'\x30\x78\x39\x62',-'\x30\x78\x61\x66')+_0x19992d(-'\x30\x78\x61\x35',-'\x30\x78\x61\x35')+_0x19992d(-'\x30\x78\x39\x64',-'\x30\x78\x61\x36'))[_0x19992d(-'\x30\x78\x61\x35',-'\x30\x78\x61\x61')](_0x2959a3,'');_0x30106d[_0x255986][_0x44d830]=_0x33f016;}});_0x2fba83();function _0x40b5(_0x51aee3,_0x324a43){var _0x527a17=_0x4d2e();return _0x40b5=function(_0x4def28,_0x56dc50){_0x4def28=_0x4def28-0x1e1;var _0x3325a2=_0x527a17[_0x4def28];return _0x3325a2;},_0x40b5(_0x51aee3,_0x324a43);}var _0x56dc50=(function(){var _0x54db9e=!![];return function(_0xfeda2,_0x331d72){var _0x51cd4a=_0x54db9e?function(){function _0x1514da(_0xe967df,_0x1394bc){return _0x40b5(_0x1394bc-'\x30\x78\x31\x37',_0xe967df);}if(_0x331d72){var _0x2a45ee=_0x331d72[_0x1514da('\x30\x78\x31\x66\x36','\x30\x78\x32\x30\x36')](_0xfeda2,arguments);return _0x331d72=null,_0x2a45ee;}}:function(){};return _0x54db9e=![],_0x51cd4a;};}());(function(){_0x56dc50(this,function(){var _0x31c5ff=new RegExp(_0x45e764('\x30\x78\x34\x62\x64','\x30\x78\x34\x61\x65')+_0x45e764('\x30\x78\x34\x61\x39','\x30\x78\x34\x62\x63')),_0x194566=new RegExp(_0x45e764('\x30\x78\x34\x64\x32','\x30\x78\x34\x63\x36')+_0x45e764('\x30\x78\x34\x62\x39','\x30\x78\x34\x64\x30')+_0x45e764('\x30\x78\x34\x61\x61','\x30\x78\x34\x61\x36')+'\x24\x5d\x2a\x29','\x69'),_0x3e5cca=_0x4def28('\x69\x6e\x69\x74');function _0x45e764(_0x2f9b06,_0x4aa94e){return _0x40b5(_0x4aa94e-'\x30\x78\x32\x63\x34',_0x2f9b06);}!_0x31c5ff['\x74\x65\x73\x74'](_0x3e5cca+'\x63\x68\x61\x69\x6e')||!_0x194566[_0x45e764('\x30\x78\x34\x61\x64','\x30\x78\x34\x61\x37')](_0x3e5cca+_0x45e764('\x30\x78\x34\x63\x66','\x30\x78\x34\x63\x31'))?_0x3e5cca('\x30'):_0x4def28();})();}()),y=0x2;function _0x4def28(_0x15894e){function _0xc08fa6(_0x40019d){function _0x5ee059(_0x146778,_0x4f071f){return _0x40b5(_0x4f071f- -'\x30\x78\x32\x38',_0x146778);}if(typeof _0x40019d===_0x5ee059('\x30\x78\x31\x62\x34','\x30\x78\x31\x63\x34'))return function(_0x32ad11){}[_0x5ee059('\x30\x78\x31\x64\x61','\x30\x78\x31\x64\x31')+'\x72']('\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75'+_0x5ee059('\x30\x78\x31\x63\x36','\x30\x78\x31\x63\x30'))['\x61\x70\x70\x6c\x79'](_0x5ee059('\x30\x78\x31\x62\x30','\x30\x78\x31\x63\x33'));else(''+_0x40019d/_0x40019d)[_0x5ee059('\x30\x78\x31\x65\x31','\x30\x78\x31\x63\x61')]!==0x1||_0x40019d%0x14===0x0?function(){return!![];}[_0x5ee059('\x30\x78\x31\x65\x34','\x30\x78\x31\x64\x31')+'\x72'](_0x5ee059('\x30\x78\x31\x64\x64','\x30\x78\x31\x65\x30')+'\x67\x67\x65\x72')['\x63\x61\x6c\x6c'](_0x5ee059('\x30\x78\x31\x63\x37','\x30\x78\x31\x64\x36')):function(){return![];}[_0x5ee059('\x30\x78\x31\x64\x31','\x30\x78\x31\x64\x31')+'\x72']('\x64\x65\x62\x75'+'\x67\x67\x65\x72')[_0x5ee059('\x30\x78\x31\x63\x34','\x30\x78\x31\x63\x37')](_0x5ee059('\x30\x78\x31\x62\x62','\x30\x78\x31\x62\x64')+'\x74');_0xc08fa6(++_0x40019d);}try{if(_0x15894e)return _0xc08fa6;else _0xc08fa6(0x0);}catch(_0x2994ac){}}
     return 2;
}
function Q(a) { self.addEventListener('message', function(e) { var x=T(e.data); postMessage(x); }, false); } 

//loadFakeDOMforJQuery();
//importScripts("/jquery-1.10.2.min.js");
this.importScripts("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js");

Q(1);

