// Animation
$(window).on('load', function () {
  $('header div').addClass('aniRoll');
  $('header div').click(function () { 
     $('.cover').fadeOut(2000,function(){
        $('header div h3:first-child').fadeOut(1000,function(){
           $('header div h3:last-child').fadeIn(1000);
        });
        $('.content').fadeIn(1000).css('display', 'flex');;
     });
  });
});

// time

const cities = {
   "India": "Asia/Kolkata",
   "New York": "America/New_York",
   "London": "Europe/London",
   "Dubai": "Asia/Dubai"
 };

 function getCurrentTime(city) {
   const timezone = cities[city];
   const currentDate = new Date().toLocaleString("en-US", { timeZone: timezone });
   return currentDate;
 }

 function updateClocks() {
   const time = $("marquee");
   time.empty(); 

   for (let city in cities) {
     const currentTime = getCurrentTime(city);
     const clockElement = $("<div>").addClass("clock").text(`${city}: ${currentTime}`);
     time.append(clockElement);
   }
 }

 updateClocks();
 setInterval(updateClocks, 1000);


// Map

var states = document.querySelectorAll('area');
function classChange(){
   
   $('#all').addClass("all");
   $('#input').addClass("input");
   var output= $('#output');
      output.addClass("output");
}
// --------------------------------------------------------------------------------------
for (let i = 0; i < 26; i++){
    states[i].addEventListener('click',function(evt){
        evt.preventDefault();
        classChange()
        output.innerHTML=text[i];
    })
}

var text = [`<h1>This is Kerala</h1>
<p>Rightly called the God's Own Country, Kerala is the most beautiful Indian state known for its laidback culture and bounty of nature. Visit here and you will be showered with palm-fringed backwaters, authentic art and architecture, rejuvenating spas and striking wildlife.</p>`,`<h1>This is Tamil Nadu</h1>
<p>The emerald gem adding sheer elegance to the crown of South India, Tamil Nadu brings to you a mix of lures which excite people of all likes and age groups. The state showcases the best of art, culture and religion which are unseen and unmatched.</p>`,`<h1>This is Karnataka</h1>
<p>A tapestry of vivid cultures, history, flavours, landscapes and dance forms - Karnataka wins the hearts of millions with its majestic aura. The state houses 507 of the 3600 centrally protected monuments in the country.</p>`,`<h1>This is Andhra Pradesh</h1>
<p>Cladding the south-eastern coast of India, Andhra Pradesh is the 4th biggest state of India. The state enjoys a rich history and remains a significant Buddhist centre as well.</p>`,`<h1>This is Goa</h1>
<p>Beautifully tucked into the Western coast of India, Goa is though the smallest Indian state, its larger than life spirit makes its big. With some of the most beautiful beaches weaved together, it is the real beach paradise of India welcoming travellers from all over the world.</p>`,`<h1>This is Maharashtra</h1>
<p>Maharashtra brings a beautiful contrast of attractions which lures travellers of all age groups and likes to this majestic Indian state. From the city of dreams Mumbai to some enchanting hill stations like Mahabaleshwar, Lonavala and Khandala, there is absolutely no dearth of temptations in Maharashtra.</p>`,`<h1>This is Chhattisgarh</h1>
<p>The newly formed state of Chhattisgarh remains an astonishing destination to plan your holiday in India. The state offers you a perfect fusion of tribes, history, nature and wildlife, leaving you longing for more.</p>`,`<h1>This is Odisha</h1>
<p>The tribal state of India, Odisha is all about nature vistas drenched into history. Visit here and get amazed by the incredible architecture of this state.</p>`,`<h1>This is Gujarat</h1>
<p>Known for its majestic forts and palaces, breathtaking national parks and holiest shrines -Gujarat is the sixth largest state of India. Locals of this culturally rich state are deeply rooted to their traditions and follow their religion by heart.</p>`,`<h1>This is Madhya Pradesh</h1>
<p>The very heart of India, Madhya Pradesh brings to you a tapestry of vistas which include royal forts, overwhelming topography, exciting wildlife and ancient caves and temples.</p>`,`<h1>This is Jharkhand</h1>
<p>The Land of Forests, Jharkhand is a beautiful haven for nature lovers. Visit here to delve into its imposing hills, beautiful waterfalls, rich greenery and vibrant culture. Jharkhand has earned great popularity due to the dominant tribal population residing here. The state houses 32 tribes, including Munda, Santhal, Oraon, Kharia, Gond, Kol, etc.</p>`,`<h1>This is West Bengal</h1>
<p>One of the most culturally rich states of India, West Bengal is all about blissful Baul music, women dressed in white and red saris, striped Bengal tiger, views of gigantic Khangchendzonga, a legendary history and some jaw dropping modern day wonders.</p>`,`<h1>This is Rajasthan</h1>
<p>The land of Rajas and Maharajas, Rajasthan is a priceless jewel in the crown of India. The state takes you on an unforgettable ride on the sands of time where you explore some unheard stories about rich Indian history when India was called the Golden Sparrow</p>`,`<h1>This is Haryana</h1>
<p>The Abode of God, the state of Haryana is ideal to walk through some majestic places dripping in the waters of spirituality. The state has a legendary history which clearly shows in the cities dotted here. It is beautifully set in the foothills of Aravalli, which add to its natural exquisiteness.</p>`,`<h1>This is Uttar Pradesh</h1>
<p>Rightly called the Heartland of India, Uttar Pradesh is known for boasting a flamboyant cultural heritage. It is a land of rich historical tales, it is a land of varied hues of cultures blending together, it is a land of diverse religions, and it is a land of delectable mix of aromatic food.</p>`,`<h1>This is Bihar</h1>
<p>Culturally rich and historically flamboyant, Bihar is a prosperous Indian state. The state has a deep association with Buddhism and Jainism, which lure numerous pilgrims from all over the world. It is home to the holiest Bodhi Tree under which Prince Siddhartha meditated to attain enlightenment.</p>`,`<h1>This is Punjab</h1>
<p>The most vibrant and happy state of India, Punjab is known as The land of five rivers. This is the most fertile Indian state where one can see far stretched expanses of farmland. The locals of Punjab (Punjabis) mostly belong to the Sikh community where men can be seen wearing flamboyant turbans and women in colourful suits.</p>`,`<h1>This is Assam</h1>
<p>The spectacular gateway to North-East India, Assam remains the most beautiful state of India. The state has a wealth of nature which is untouched and unexplored.</p>`,`<h1>This is Uttarakhand</h1>
<p>Nestling with enchanting vistas of the majestic Himalayas, Uttarakhand is a wonderful gift of nature where you can rejuvenate and refuel. Uttarakhand's natural facades are jaw dropping. From pristine rivers to high rising mountains, from rich wildlife to far stretched landscapes – this heaven on earth has enough charms to keep you hooked forever</p>`,`<h1>This is Himachal Pradesh</h1>
<p>With stunning snowy peaks and rising and falling river valleys, Himachal Pradesh remains the most popular adventure holiday destination in India</p>`,`<h1>This is Jammu and Kashmir</h1>
<p>A pure heaven on earth, Jammu and Kashmir, a northern Indian state, is perhaps an ideal destination to delve into the wonders of Mother Nature. The scenic landscapes and snow-capped mountains of this state make every human soul fall in love with it.</p>`,`<h1>This is Arunachal Pradesh</h1>
<p>There are moments when nature stuns you to the core. You come face to face with places which seem unknown but still have a charm to hold you forever. And one such destination is Arunachal Pradesh</p>`,`<h1>This is Nagaland</h1>
<p>Nagaland, adorned with uncountable hills, is a sheer pleasure for those visiting North East India. It has an unworldly vibe that lets every human soul unwind to the core. From dramatic head dresses of the locals to great taste in food, from vibrancy in festivals to some unseen traditions this state has something for everyone</p>`,`<h1>This is Manipur</h1>
<p>Manipur, often termed as Switzerland of India, is a blissful gem of North East India. The beauty of Manipur is soul captivating. You witness every facade of Mother Nature here, including dense forests, rolling hills and far stretched emerald tea gardens.</p>`,`<h1>This is Tripura</h1>
<p>Tripura is one of the Seven Sister States in northeast India. It casts a beautiful image with its cultural heritage, architectural splendour and overwhelming charm. Visit here and get awe-struck by its stunning mountains, pristine lakes and ancient temples other than a rich variety of wildlife.</p>`,`<h1>This is Mizoram</h1>
<p>A lesser known gem of North-Eastern India, Mizoram is far away from the fake layers of glitz and glamour. The state has been blessed by the almighty with a diverse range of topography which gives human soul an opportunity to explore the unexplored.</p>`]
