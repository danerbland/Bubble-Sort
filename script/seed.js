const db = require('../server/db')
const {User, Product} = require('../server/db/models')

async function seed(){

  await db.sync({
    force: true,
  })
  console.log('db synced')
  //Seeding Users

  const users = [
    {
      'name': 'Dan',
      'bio': 'New soap enthusiast from New York! Trying to stay clean in a grimy city.',
      'email': 'danerbland@gmail.com',
      'password': '123',
    },
    {
      'name': 'Tayla',
      'bio': 'Connoisseur of the high life',
      'email': 'tayla@fullstack.com',
      'password': '123'
    },
    {
      'name': 'Alex',
      'bio': 'Very clean! Amateur soapmaker and soap enthusiast',
      'email': 'Alex@soaps.com',
      'password': '123'

    },
    {
      'name': 'Peter',
      'bio': 'I don\'t really know what I\'m doing here. I prefer mud',
      'email': 'peter@darpa.gov',
      'password': '123'
    }
  ]

  await User.bulkCreate(users)

  // Seeding Products

  const products = [

    {
      'name': 'Nut 2 SHEAbee',
      'description':'A little nutty, lots of skin lovin\' oils & moisturizing butters, and witty word play out the wazzooo -- that\'s why this soap from Kelly from Yaphank, NY is a 2013 contest winner.',
      'imageURL': 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_nut2sheabee_stacked_1050x.jpg?v=1538596400',
      'price': '855',
      'quantity': '100'
    }
    ,
    {
      'name': 'Lemon Rosemary',
      'description': 'Open the Heart and give yourself wings. It\'s a great start to your day.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_lemon_rosemary_stacked_1050x.jpg?v=1538595800',
      'price' :'855',
      'quantity' :'50'
    }
    ,
    {
      'name': 'I\'m Yummy & I Know It',
      'description': 'Vanilla, Coconut & a YUMMY Citrus Medley As seen in AmEx commercial w/ Shaq & Kendrick Lamar! This is the soap Shaq is divinely smelling! Wiggle, wiggle, wiggle!',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_im_yummy_iknowit_stacked_1050x.jpg?v=1538595740',
      'price' :'800',
      'quantity' :'35'
    }
    ,
    {
      'name': 'Pepperlyptus Rex',
      'description': 'Peppermint & Eucalyptus. This magnificent beast is a blend of potent Peppermint, empowering Eucalyptus, and a whole lotta GRRRRRRR.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_pepperlyptus_rex_stacked_1050x.jpg?v=1538596460',
      'price' :'900',
      'quantity' :'75'
    }
    ,
    {
      'name': 'Purple Haze',
      'description': 'Lavender & Patchouli. Purple Haze all in my brain. And now it\'s all over your body. Thank You Jimmy. Just like Rock n\' Roll.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_purple_haze_stacked_1050x.jpg?v=1538596520',
      'price' :'855',
      'quantity' :'100'
    }
    ,
    {
      'name': 'Hippeee',
      'description': 'Patchouli, Cedarwood, Rose & an Exotic Floral Blend.  A Soaptopia Favorite. Deep, earthy, Embrace your inner hippie and celebrate the flower child in all of us.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_hippeee_stacked_1050x.jpg?v=1538595740',
      'price' :'795',
      'quantity' :'10'
    }
    ,
    {
      'name': 'Chai & Catch Me',
      'description': 'Vanilla, Sweet Almond & Cinnamon. A winner of our Build A Bar Soap contest. Thanks, and congrats to Amanda in Bozeman, MT.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_chai_and_catch_me_stacked_1050x.jpg?v=1538595621',
      'price' :'1000',
      'quantity' :'50'
    }
    ,
    {
      'name': 'Bathing Bath',
      'description': 'Lemongrass, Peppermint, Lime & Bergamot.  Fresh out of the lab -- a contest winning idea from Jeremie of Sherman Oaks. This one will get your heart racing with bright fresh essential oils of Bergamot, Lemongrass, Lime and Peppermint.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_bathing_bath_stacked_1050x.jpg?v=1538595622',
      'price' :'700',
      'quantity' :'150'
    }
    ,
    {
      'name': 'Coal Soap, Naughty Lump aka Coal Play',
      'description': 'Charcoal & Tea Tree.Viva YOUR FACE. This soap is a skin loving blemish remover. Charcoal has been used to reduce acne. Plus this beautiful soap feels extra smooth on your skin and smells great. Started as a holiday lump of coal soap, this is such a favorite we brought it back all year long.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_bar_soap_coal_stacked_1050x.jpg?v=1538595922',
      'price' :'875',
      'quantity' :'45'
    }
    ,
    {
      'name': 'Viva La Free Ya!',
      'description': 'Neroli, Jasmine, Tangerine, Litsea & Fruity Black Tea. A contest soap celebrating Frida Kahlo that will FREE YA mind! Any resemblance to a unibrow is in no way coincidental. A 2014 Soap Contest winner by Evelin of Sherman Oaks, CA and Sheri of Lakeland, FL.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_viva_la_freeya_stacked_1050x.jpg?v=1538596583',
      'price' :'900',
      'quantity' :'66'
    }
    ,  {
      'name': 'Shaman ScRUB',
      'description': 'Sage, Ylang Ylang & Sandalwood.  Brings warmth, harmony, insightfulness, unity, and grounding. Gentle pumice exfoliant from Lake Powell.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_shaman_scrub_stacked_1050x.jpg?v=1538596521',
      'price' :'950',
      'quantity' :'80'
    }
    ,  {
      'name': 'Mighty Tidy',
      'description': 'Yuzu, Lemongrass & Eucalyptus. Fresh, clean and tippin\' on the scene. Clear your head and cleanse your body with this bright soap specially crafted by and for our buds, Whole Foods PCH Whole Body team.',
      'imageURL' : 'https://cdn.shopify.com/s/files/1/1832/9599/products/soaptopia_core_bar_soap_mighty_tidy_stacked_1050x.jpg?v=1538596339',
      'price' :'950',
      'quantity' :'75'
    }
  ]

  await Product.bulkCreate(products)
}

seed()
