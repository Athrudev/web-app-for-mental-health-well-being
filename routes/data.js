const data = {
  music: {
    happy: [
      '"Happy" by Pharrell Williams',
      '"Walking On Sunshine" by Katrina & The Waves',
      '"Uptown Funk" by Mark Ronson ft. Bruno Mars',
      '"Shake It Off" by Taylor Swift',
      '"Dancing Queen" by ABBA',
      '"Wake Me Up Before You Go-Go" by Wham!',
      '"Celebration" by Kool & The Gang',
      `"Can't Stop the Feeling!" by Justin Timberlake`,
      '"Valerie" by Amy Winehouse',
      '"Build Me Up Buttercup" by The Foundations',
      '"I Got You (I Feel Good)" by James Brown',
      '"September" by Earth, Wind & Fire',
      '"Here Comes The Sun" by The Beatles',
      '"Happy Together" by The Turtles',
      '"Mamma Mia" by ABBA',
      '"I Wanna Dance with Somebody" by Whitney Houston',
      '"Sugar" by Maroon 5',
      '"Footloose" by Kenny Loggins',
      '"Girls Just Want to Have Fun" by Cyndi Lauper',
      `"Don't Stop Believin'" by Journey`,
      "Adharam Madhuram by Sherya Goshal",
      "Mr. Blue Sky - Electric Light Orchestra",
      "Dancing Queen - ABBA",
      "Can't Stop the Feeling! - Justin Timberlake",
      "Happy - Pharrell Williams",
      "Good Vibrations - The Beach Boys",
      "Don't Stop Believin' - Journey",
      "Lovely Day - Bill Withers",
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "I Wanna Dance with Somebody (Who Loves Me) - Whitney Houston",
      "Hey Jude - The Beatles",
      "Don't Stop Believin' - Journey",
      "Lovely Day - Bill Withers",
      "September - Earth, Wind & Fire",
      "Singin' in the Rain - Gene Kelly",
      "Happy Together - The Turtles",
      "9 to 5 - Dolly Parton",
      "Country Roads - John Denver",
      "Count on Me - Bruno Mars",
      "Three Little Birds - Bob Marley",
      "I'll Stand By You - The Pretenders",
      "I Will Survive - Gloria Gaynor",
      "Mr. Blue Sky - Electric Light Orchestra",
      "Roar by Katy Perry",
    ],

    sad: [
      '"Someone Like You" by Adele',
      '"Yesterday" by The Beatles',
      '"The Sound of Silence" by Simon & Garfunkel',
      '"Hallelujah" by Leonard Cohen',
      '"Mad World" by Tears For Fears',
      '"With or Without You" by U2',
      '"Hurt" by Johnny Cash',
      '"Say Something" by A Great Big World & Christina Aguilera',
      '"Jealous" by Labrinth',
      '"Whiskey Lullaby" by Brad Paisley & Alison Krauss',
      '"Stay" by Rihanna ft. Mikky Ekko',
      '"Fix You" by Coldplay',
      `"The Blower's Daughter" by Damien Rice'`,
      `"I'm So Lonesome I Could Cry" by Hank Williams`,
      `"When She Loved Me" by Sarah McLachlan`,
      `"Nothing Compares 2 U" by Sinead O'Connor`,
      `"Back to Black" by Amy Winehouse`,
      `"Everybody Hurts" by R.E.M.`,
      `"Let It Be" by The Beatles`,
      `"I Can't Make You Love Me" by Bonnie Raitt`,
      "What a Wonderful World by Louis Armstrong",
      "Imagine by John Lennon",
      "Lean on Me by Bill Withers",
    ],
    angry: [
      "Way down we go by ",
      "Eye of the Tiger - Survivor",
      "Run the World (Girls) - Beyoncé",
      "Hurt - Nine Inch Nails",
      "What a Wonderful World - Louis Armstrong",
      "Rebel Yell - Billy Idol",
      "Hit Me Baby One More Time - Britney Spears",
      "Lose Yourself - Eminem",
      "River - Eminem",
      "Imagine - John Lennon",
      "Let It Be - The Beatles",
      "Somewhere Over the Rainbow - Judy Garland",
      "Three Little Birds - Bob Marley",
      "A Million Dreams - P!nk",
      "Count on Me - Bruno Mars",
      "You Will Be Found - Sia",
      "Lean on Me - Bill Withers",
      "Redemption Song - Bob Marley",
      "Here Comes the Sun - The Beatles",
      "What a Feeling - Irene Cara",
      "Don't Worry, Be Happy - Bobby McFerrin",
      "Walking on Sunshine - Katrina and the Waves",
      "Mr. Blue Sky - Electric Light Orchestra",
      "Happy - Pharrell Williams",
      "Can't Stop the Feeling! - Justin Timberlake",
      "Lovely Day - Bill Withers",
      "Signed, Sealed, Delivered (I'm Yours) - Stevie Wonder",
      "Run the World (Girls) - Beyoncé",
      "Titanium - David Guetta ft. Sia",
      "Eye of the Tiger - Survivor",
      "Stronger (What Doesn't Kill You) - Kelly Clarkson",
      "Shake It Off - Taylor Swift",
      "Fight Song - Rachel Platten",
      "Beautiful - Christina Aguilera",
      "This Is Me - Keala Settle",
      "I'm Coming Out - Diana Ross",
      "Jump (For My Love) - The Pointer Sisters",
      "Can't Hold Us - Macklemore & Ryan Lewis ft. Ray Dalton",
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "Ain't No Mountain High Enough - Marvin Gaye & Tammi Terrell",
      "I Will Survive - Gloria Gaynor",
      "Survivor - Destiny's Child",
      "Titanium - David Guetta ft. Sia",
      "Firework - Katy Perry",
      "Believer - Imagine Dragons",
      "Raise Your Weapon - Deadmau5 & Evanescence",
      "Survivor - Destiny's Child",
    ],
    joyful: [
      "Happy Together by The Turtles",
      "Mamma Mia by ABBA",
      "I Wanna Dance with Somebody by Whitney Houston",
      '"Sugar" by Maroon 5',
      '"Footloose" by Kenny Loggins',
      '"Girls Just Want to Have Fun" by Cyndi Lauper',
      `"Don't Stop Believin'" by Journey`,
      "Madh",
      "Mr. Blue Sky - Electric Light Orchestra",
      "Dancing Queen - ABBA",
      "Can't Stop the Feeling! - Justin Timberlake",
      "Happy - Pharrell Williams",
      "Good Vibrations - The Beach Boys",
      "Don't Stop Believin' - Journey",
      "Lovely Day - Bill Withers",
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "I Wanna Dance with Somebody (Who Loves Me) - Whitney Houston",
      "Hey Jude - The Beatles",
      "Don't Stop Believin' - Journey",
      "Lovely Day - Bill Withers",
      "September - Earth, Wind & Fire",
      "Singin' in the Rain - Gene Kelly",
      "Happy Together - The Turtles",
    ],
    depress: [
      "Don't Stop Believing by Journey",
      "Happy by Pharrell Williams",
      "Dancing Queen by ABBA",
      "Mr. Blue Sky by Electric Light Orchestra",
      "Can't Stop the Feeling! by Justin Timberlake",
      "Fight Song by Rachel Platten",
      "Eye of the Tiger by Survivor",
      "Shake It Off by Taylor Swift",
      "Kiss the Rain by Yiruma",
      "Beautiful by Christina Aguilera",
      "Jump (For My Love) - The Pointer Sisters",
      "Can't Hold Us - Macklemore & Ryan Lewis ft. Ray Dalton",
      "Uptown Funk - Mark Ronson ft. Bruno Mars",
      "Ain't No Mountain High Enough - Marvin Gaye & Tammi Terrell",
      "I Will Survive - Gloria Gaynor",
      "Survivor - Destiny's Child",
      "Titanium - David Guetta ft. Sia",
      "Firework - Katy Perry",
    ],
  },

  book: {
    happy: [
      `"Bossypants" by Tina Fey`,
      `"Bridget Jones's Diary" by Helen Fielding`,
      `"Good Omens" by Terry Pratchett & Neil Gaiman`,
      `"The Hitchhiker's Guide to the Galaxy" by Douglas Adams`,
      `"Me Talk Pretty One Day" by David Sedaris`,
      `"Deep Work"`,
      `"Pride and Prejudice" by Jane Austen`,
      `"Anne of Green Gables" by L.M. Montgomery`,
      `"To Kill a Mockingbird" by Harper Lee`,
      `"Little Women" by Louisa May Alcott`,
      `"A Walk in the Woods" by Bill Bryson`,
      `"The Rosie Project" by Graeme Simsion`,
      `"The No.1 Ladies' Detective Agency" by Alexander McCall Smith`,
      `"My Family and Other Animals" by Gerald Durrell`,
      `"The Importance of Being Earnest" by Oscar Wilde`,
      `"The Secret Diary of Adrian Mole, Aged 13¾" by Sue Townsend`,
      `"Wonder" by R.J. Palacio`,
      `"Matilda" by Roald Dahl`,
      `"Three Men in a Boat" by Jerome K. Jerome`,
      `"A Man Called Ove" by Fredrik Backman`,
    ],
    sad: [
      "Anne of Green Gables by L.M. Montgomery",
      "Little Women by Louisa May Alcott",
      "The House in the Cerulean Sea by T.J. Klune",
      "A Man Called Ove by Fredrik Backman",
      "Eleanor Oliphant is Completely Fine by Gail Honeyman",
      "Man's Search for Meaning by Viktor E. Frank",
      "Tuesdays with Morrie by Mitch Albom",
      "The Alchemist by Paulo Coelho",
      "The Midnight Library by Matt Haig",
      "The Wind in the Willows by Kenneth Grahame",
      "Call Me by Your Name by André Aciman",
      "The Little Prince by Antoine de Saint-Exupéry",
      "The Book Thief by Markus Zusak",
      "The Invisible Life of Addie LaRue by V.E. Schwab",
      "The House in the Sky by Amanda Lindhout",
      "Lessons in Chemistry by Bonnie Garmus",
      "Book Lovers by Emily Henry",
      "The Cartographers by Peng Shepher",
      "Circe by Madeline Miller",
      "The Year We Learned to Fly by Kim Moore",
      "Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin",
    ],
    angry: [
      "The Alchemist by Paulo Coelho",
      "Anne of Green Gables by L.M. Montgomery",
      "Little Women by Louisa May Alcott",
      "The Secret Garden by Frances Hodgson",
      "The House in the Cerulean Sea by T.J. Klune",
      "A Man Called Ove by Fredrik Backman",
      "Eleanor Oliphant is Completely Fine by Gail Honeyman",
      "The Guernsey Literary and Potato Peel Pie Society by Mary Ann Shaffer & Annie ",
      "The Martian by Andy Weir",
      "The Little Prince by Antoine de Saint",
      "Anger Management Workbook for Dummies by W. Keith Lyness",
      "The Mindfulness Workbook for Anger by Michael A. Singer",
      "How to Win Friends and Influence Peopleby Dale Carnegie",
      "How to Win Friends and Influence Peopleby Dale Carnegie",
      "The Power of Now: A Guide to Spiritual Enlightenment by Eckhart Tolle",
      "The Feeling Good Handbook by David D. Burns",
      "Man's Search for Meaning by Viktor E. Frankl",
      "Daring Greatly: How to Be Vulnerable, Dare to Fail, and Live Heartfelt by Brené Brown",
      "The Happiness Project: One Year of Experiments in Living Joyfully by Gretchen Rubin",
      "Quiet: The Power of Introverts in a World That Can't Stop Talking by Susan Cain",
      "Atomic Habits by James Clear",
    ],
    joyful: [
      "Three Men in a Boat (To Say Nothing of the Dog) by Jerome K. Jerome",
      "The Hitchhikers Guide to the Galaxy by Douglas Adams",
      "Eleanor Oliphant is Completely Fine by Gail Honeyman",
      "The House in the Cerulean Sea by T.J. Klune",
      "The Guernsey Literary and Potato Peel Pie Society by Mary Ann Shaffer & Annie Barrows",
      "Anne of Green Gables by Montgomery",
      "Little Women by Louisa May Alcott",
      "Mans Search for Meaning by Viktor E. Frankl",
      "Tuesdays with Morrie by Mitch Albom",
      "The Alchemist by Paulo Coelho",
      "Pride and Prejudice by Jane Austen (181)",
      "To Kill a Mockingbird by Harper Lee",
      "The Secret Garden by Frances Hodgson Burnett",
      "Modern Reads that will Brighten Your Day",
      "A Man Called Ove by Fredrik Backman",
      "Eleanor Oliphant is Completely Fine byGail Honeyman",
      "The Year of Yes: How Saying Yes to Everything Can Change Your Life by Shonda Rhimes",
      "Born a Crime: Stories of My South African Youth byTrevor Noah",
      "Project Hail Mary by Andy Weir",
      "Circe by Madeline Miller",
      "The Vanishing Half by Brit Bennett",
      "Recursion by Blake Crouch",
    ],
    depress: [
      "Pride and Prejudice by Jane Austen (181)",
      "To Kill a Mockingbird by Harper Lee",
      "The Secret Garden by Frances Hodgson Burnett",
      "Modern Reads that will Brighten Your Day",
      "A Man Called Ove by Fredrik Backman",
      "Eleanor Oliphant is Completely Fine byGail Honeyman",
      "The Year of Yes: How Saying Yes to Everything Can Change Your Life by Shonda Rhimes",
      "Born a Crime: Stories of My South African Youth byTrevor Noah",
      "Project Hail Mary by Andy Weir",
      "Circe by Madeline Miller",
      "The House in the Cerulean Sea by T.J. Klune",
      "Anne of Green Gables by L.M. Montgomery",
      "Little Women by Louisa May Alcott",
      "The House in the Cerulean Sea by T.J. Klune",
      "A Man Called Ove by Fredrik Backman",
    ],
  },

  movie: {
    happy: [
      `"Ferris Bueller's Day Off"`,
      `"Legally Blonde"`,
      '"Singing in the Rain"',
      `"The Princess Bride"`,
      `"Mamma Mia!"`,
      `"Toy Story"`,
      `"Finding Nemo"`,
      `"The Grand Budapest Hotel"`,
      `"The Sound of Music"`,
      `"Guardians of the Galaxy"`,
      `"Big"`,
      `"Singin' in the Rain"`,
      `"Ratatouille"`,
      `"Shrek"`,
      `"Despicable Me"`,
      `"Clueless"`,
      `"The Mask"`,
      `"Groundhog Day"`,
      `"10 Things I Hate About You"`,
      `"Tangled"`,
      `"Monsters, Inc."`,
      '"The Princess Bride"',
      '"Amelie"',
      '"The Mitchells vs. the Machines"',
      '"Howls moving castle"',
      '"120 hours"',
      '"Hawaizaada"',
      '"Leo(Animated Movie)"',
      '"Up"',
      '"Hi Nanna"',
      '"Hey! Sinamika"',
      '"Manchester by the Sea"',
      '"Moonlight"',
      '"Zindagi Na Milegi Dobara"',
      '"Ala Vaikunthapurramuloo"',
      '"Dilwale Dulhania Le Jayenge"',
      '"Queen"',
      '"Andaz Apna Apna"',
      '"The Grand Budapest Hotel"',
      '"Coco"',
      '"Bommarillu"',
      '"Happy Days"',
      '"Uyyala Jampala"',
      '"Majili"',
      '"Premam"',
      '"Comali"',
      '"Charlie Chaplin"',
      '"Bangalore Days"',
      '"Oru Vadakkan Selfie"',
      '"Njan Prakashan"',
      '"Katyar Kaljat Ghusli"',
      '"Balgandharva"',
      '"Elizabeth Ekadashi"',
      '"Ferrari Ki Sawaari"',
      '"Steve Jobs"',
    ],
    angry: [
      '"Bhavesh Joshi Superhero"',
      '"Hanuman"',
      '"Special 26"',
      '"Vicky Donor"',
      '"Piku"',
      '"John Wick"',
      '"Mad Max: Fury Road"',
      '"Black Panther"',
      '"Kill Bill"',
      '"The Raid 2"',
      '"Vikram"',
      '"Temper"',
      '"Atharintiki Daredi"',
      '"Uri"',
      '"Subhashchandra Bh"',
      '"Bose: Dead/Alive"',
      '"Lakshyam"',
      '"Magadheera"',
      '"Pulimurugan "',
      '"Lucifer"',
      '"Irupatham Noottandu"',
      '"Take off "',
      '"Kurup"',
      '"Lokmanya: Ek Yugpurush"',
      '"Brother"',
    ],

    joyful: [
      '"English Vinglish"',
      '"Yes day"',
      '"Home Alone"',
      '"Inside Out"',
      '"My girl"',
      '"The Super Mario"',
      '"Lyle, Lyle, Crocodile"',
      '"Benji"',
      '"elf"',
      '"spy kids"',
      '"Hugo"',
      '"Toy story"',
      '"Finding nemo "',
      '"Andaz Apna Apna"',
      '"Band Baaja Baarat"',
      '"La La Land"',
      '"The Greatest Showman"',
      '"Duniyadari"',
      '"The Incredibles"',
      '"Spider-Man: Into the Spider-Verse"',
      '"Toy Story 4"',
      '"Kunfu"',
      '"Kung Fu Panda"',
      '"Hera Pheri"',
      '"Hera Pheri 2"',
      '"Hera Pheri 3"',
      '"Munnabhai MBBS"',
      '"Charlie Chaplin"',
      '"Shivaji Rao Bhosale"',
      '"Golmaal"',
      '"De Dhakka"',
      '"De Dhakka 2"',
      '"Huppa Huiyya"',
    ],
    sad: [
      '"Taare Zameen Par"',
      '"Masaan"',
      '"Iqbal"',
      '"V for Vendetta"',
      '"Rang De Basanti"',
      '"Schindlers List"',
      '"Subhedar"',
      '"Sher Shivraj"',
      '"Sambhaji 1689"',
      '"Guthlee Ladoo"',
      '"Farzand"',
      '"Hirkani"',
      '"Pawankhind"',
      '"Sinhagad"',
      '"Ravrambha"',
      '"Bhagwan Bharose"',
      '"Court"',
      '"Killa"',
      '"Khwada"',
      '"Deool"',
      '"Shala"',
      '"Natarang"',
      '"Moonlight"',
      '"Cinema Paradiso"',
      '"Malli Malli Idirani"',
      '"Ye Maya Chesave"',
      '"Anaganaganaga O Shilpa"',
      '"Njan Steve Lopez"',
      '"Thappad"',
      '"Manjhi – The Mountain Man"',
      '"Dangal"',
      '"Mary Kom"',
      '"Airlift"',
      '"Padman"',
      '"Swades"',
      '"Super 30"',
      '"Lagaan"',
      '"Pangaa"',
      '"Hichki"',
      '"Border"',
      '"Manto"',
      '"Mission Mangal"',
      '"I Am Kalam"',
      '"slumdog millionaire"',
    ],
    depress: [
      '"Guthlee Ladoo"',
      '"Farzand"',
      '"Hirkani"',
      '"Pawankhind"',
      '"Sinhagad"',
      '"Ravrambha"',
      '"Bhagwan Bharose"',
      '"Court"',
      '"Killa"',
      '"Khwada"',
      '"Deool"',
      '"Shala"',
      '"Natarang"',
      '"Moonlight"',
      '"Cinema Paradiso"',
      '"Thappad"',
      '"Manjhi – The Mountain Man"',
      '"Dangal"',
      '"Mary Kom"',
      '"Airlift"',
      '"Padman"',
      '"Swades"',
      '"Super 30"',
      '"Lagaan"',
      '"Pangaa"',
      '"Hichki"',
      '"Border"',
      '"Manto"',
      
    ],
  },
};

module.exports = data;