const maindiv= document.getElementById("shows")
let shows= [
    {
      "title": "SpongeBob SquarePants",
      "image_url": "https://m.media-amazon.com/images/M/MV5BYjJmMjBkZjMtZThiZS00Nzk3LWJlN2UtYmE5ZjkyNjJiZjgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "A sponge who lives in a pineapple under the sea and has wacky adventures with his best friend, a starfish named Patrick."
    },
    {
      "title": "Tom and Jerry",
      "image_url": "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15800255/Tom_and_Jerry_.0.0.1462472638.jpg?quality=90&strip=all&crop=12.5,0,75,100",
      "description": "A classic cat-and-mouse rivalry, where Tom the cat chases Jerry the mouse through various funny situations."
    },
    {
      "title": "The Simpsons",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "A satirical family sitcom that follows the daily lives of the Simpson family, set in the fictional town of Springfield."
    },
    {
      "title": "Adventure Time",
      "image_url": "https://m.media-amazon.com/images/M/MV5BMjkxMzIwNmQtMzM5Ni00YWJiLTg4YjQtNjBiN2IxMjZhMGQ2XkEyXkFqcGc@._V1_.jpg",
      "description": "The adventures of Finn the human and Jake the dog as they explore the post-apocalyptic land of Ooo, encountering strange creatures and magic."
    },
    {
      "title": "Rick and Morty",
      "image_url": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "The mad scientist Rick Sanchez and his good-hearted but easily distressed grandson Morty travel through alternate realities and bizarre worlds."
    },
    {
      "title": "Looney Tunes",
      "image_url": "https://m.media-amazon.com/images/I/91nh8gjPwqL._UF1000,1000_QL80_.jpg",
      "description": "A series of animated short films featuring famous characters like Bugs Bunny, Daffy Duck, and Elmer Fudd in hilarious situations."
    },
    {
      "title": "Avatar: The Last Airbender",
      "image_url": "https://m.media-amazon.com/images/I/61Wps+FMG-L._AC_UF1000,1000_QL80_.jpg",
      "description": "A young boy named Aang, the last Airbender, embarks on a journey to defeat the Fire Nation and bring balance to the world."
    },
    {
      "title": "The Flintstones",
      "image_url": "https://m.media-amazon.com/images/M/MV5BOWM1ZWE0MTMtY2UyYi00ZTVlLTg0MmItYTVmYTk3Mzk4YzJjXkEyXkFqcGc@._V1_.jpg",
      "description": "Set in the prehistoric town of Bedrock, this animated series follows the misadventures of Fred Flintstone and his family."
    },
    {
      "title": "Family Guy",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "A dysfunctional family from Quahog, Rhode Island, with a talking dog and a baby with an evil genius mind, led by the bumbling Peter Griffin."
    },
    {
      "title": "Futurama",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjXyDKUfScFnr5ihW-iqvWcsmNfLbJ7IqTw&s",
      "description": "Fry, a 20th-century slacker, wakes up 1,000 years in the future and joins a crew of misfit robots, aliens, and humans as they explore the galaxy."
    },
    {
      "title": "Pinky and the Brain",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxZfDLDF-3kVfAROe8sYVdtJGtD-Q5taGvQ&s",
      "description": "Two lab mice, one a genius and the other a dim-witted fool, try to take over the world in hilarious attempts."
    },
    {
      "title": "Peanuts",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/1b/Peanuts_2014_TV_series.jpg",
      "description": "A group of lovable characters, led by Charlie Brown and Snoopy, navigate life's challenges with humor and heart."
    },
    {
      "title": "Teenage Mutant Ninja Turtles",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Cr_7u0hXPZHhmxeJ7EjCwK_1y4Dg4B4T0Q&s",
      "description": "Four turtles mutate into ninjas and fight crime in New York City, battling the evil Shredder and his henchmen."
    },
    {
      "title": "The Amazing World of Gumball",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNmEwYzNhODgtZDc2Yi00MDAyLTliNWYtMDRkMThmMWE0NGNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "Gumball Watterson and his mischievous cat brother Darwin face wild adventures and quirky situations in their colorful town of Elmore."
    },
    {
      "title": "DuckTales",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNTA2NTc5MzQwNV5BMl5BanBnXkFtZTgwOTY2ODI2MjI@._V1_FMjpg_UX1000_.jpg",
      "description": "Scrooge McDuck and his nephews Huey, Dewey, and Louie embark on treasure hunts and exciting adventures around the world."
    }
  ]
  
function showsdata(){
    maindiv.textContent=''
    shows.forEach((m)=>
    {
        const showdiv= document.createElement("div")
        showdiv.classList.add('show')
        //const imgdisc = document.createElement("div")
        //imgdisc.classList.add(imgdisc)
        const showimg =document.createElement("img")
        showimg.classList.add('showimg')
        showimg.src= m.image_url
        showimg.alt= m.title
        const showtitle = document.createElement("h2")
        showtitle.textContent = m.title
        const showdisc = document.createElement("p")
        showdisc.textContent = m.description
        const showbtn = document.createElement("button")
        showbtn.classList.add('showbtn')
        showbtn.textContent="Watch Now"
        //imgdisc.append(showimg,showdisc)
        showdiv.append(showtitle,showimg,showbtn)
        maindiv.appendChild(showdiv)
        
    })
}
showsdata()

const maintwodiv=document.getElementById('movies')
let movies=[
    {
      "title": "Toy Story",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      "description": "A story about the secret lives of toys when people are not around, focusing on the relationship between Woody, a pull-string cowboy doll, and Buzz Lightyear, an astronaut action figure."
    },
    {
      "title": "Spirited Away",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "description": "A young girl, Chihiro, becomes trapped in a mysterious and magical world of spirits and must find a way to free herself and her parents."
    },
    {
      "title": "Frozen",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
      "description": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice, she unintentionally traps her kingdom in eternal winter. Her sister Anna sets out to bring her back and restore summer."
    },
    {
      "title": "Shrek",
      "image_url": "https://www.peacocktv.com/dam/growth/assets/Library/Shrek/shrek-vertical-key-art.jpg",
      "description": "An ogre named Shrek finds his swamp overrun by fairy tale creatures and sets out to rescue Princess Fiona to get his land back—only to discover unexpected love and friendship."
    },
    {
      "title": "How to Train Your Dragon",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg",
      "description": "A young Viking named Hiccup defies tradition by befriending a dragon, leading to a change in how his village sees the creatures they once feared."
    },
    {
          "title": "Up",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
          "description": "A grumpy old man and an eager young boy go on a wild balloon-powered adventure to South America in a flying house."
    },
    {
          "title": "Coco",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
          "description": "Aspiring musician Miguel enters the Land of the Dead to find his great-great-grandfather, a legendary singer, and uncover his family's history."
    },
    {
          "title": "The Lion King",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
          "description": "A young lion prince flees his kingdom after the death of his father but returns to reclaim the throne with the help of new friends."
    },
    {
          "title": "Inside Out",
          "image_url": "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
          "description": "Personified emotions try to guide a young girl through a difficult life change as she struggles to adjust to a new city and school."
    },
    {
          "title": "Zootopia",
          "image_url": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11993845_p_v8_aq.jpg",
          "description": "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
    },
    {
      "title": "Moana",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg",
      "description": "An adventurous teenager sails out on a daring mission to save her people, aided by the demigod Maui and the ocean itself."
    },
    {
      "title": "Tangled",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
      "description": "A spirited princess with magical hair escapes her tower and goes on a wild journey with a charming thief."
    },
    {
      "title": "Ratatouille",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
      "description": "A rat with a passion for cooking forms an unlikely alliance with a young kitchen worker at a famous Paris restaurant."
    },
    {
      "title": "The Incredibles",
      "image_url": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_FMjpg_UX1000_.jpg",
      "description": "A family of undercover superheroes is forced into action to save the world while balancing the chaos of suburban life."
    },
    {
      "title": "Big Hero 6",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/4/4b/Big_Hero_6_%28film%29_poster.jpg",
      "description": "A young robotics prodigy teams up with a lovable inflatable robot and a group of tech-savvy friends to battle a mysterious villain."
    },
    {
      "title": "Finding Nemo",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
      "description": "After his son is captured in the Great Barrier Reef, a timid clownfish sets out on a journey to bring him home."
    },
    {
      "title": "Kung Fu Panda",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
      "description": "A clumsy panda discovers he’s the chosen one destined to become a kung fu master and defend the Valley of Peace."
    },
    {
      "title": "Despicable Me",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c0/Despicable_Me_%282010_animated_feature_film%29.jpg",
      "description": "A supervillain adopts three orphan girls as part of his latest scheme—only to find his heart melting in the process."
    },
    {
      "title": "The Lego Movie",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/1/10/The_Lego_Movie_poster.jpg",
      "description": "An ordinary LEGO figure is mistaken for the prophesied 'Special' and joins a quest to stop an evil tyrant’s plan."
    },
     ]

      function moviesdata(){
        maintwodiv.textContent=''
        movies.forEach((n)=>
        {
            const moviediv= document.createElement("div")
            moviediv.classList.add('movie')
            //const imgdisc = document.createElement("div")
            //imgdisc.classList.add(imgdisc)
            const movieimg =document.createElement("img")
            movieimg.classList.add('movieimg')
            movieimg.src= n.image_url
            movieimg.alt= n.title
            const movietitle = document.createElement("h2")
            movietitle.textContent = n.title
            const moviedisc = document.createElement("p")
            moviedisc.textContent = n.description
            const moviebtn = document.createElement("button")
            moviebtn.classList.add('moviebtn')
            moviebtn.textContent="Watch Now"
            //imgdisc.append(showimg,showdisc)
            moviediv.append(movietitle,movieimg,moviebtn)
            maintwodiv.appendChild(moviediv)
            
        })
    }
    moviesdata()
    
    const mainthreediv=document.getElementById('comedy')
    let comedies=[
        {
          "title": "Family Guy",
          "image_url": "https://tse3.mm.bing.net/th?id=OIP.GA4wHN3Awco76eioeKbjMgHaKX&pid=Api",
          "description": "A satirical sitcom that follows the Griffin family, featuring outrageous humor and cutaway gags."
        },
        {
          "title": "BoJack Horseman",
          "image_url": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11804119_b_v10_aa.jpg",
          "description": "An introspective comedy-drama about a washed-up actor who happens to be a horse, exploring themes of fame and self-worth."
        },
        {
          "title": "Rick and Morty",
          "image_url": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          "description": "A sci-fi comedy series featuring the interdimensional adventures of an eccentric scientist and his grandson."
        },
        {
          "title": "The Simpsons",
          "image_url": "https://tse4.mm.bing.net/th?id=OIP.BhXOHMF2COfN6ska9OtnPQHaEK&pid=Api",
          "description": "An iconic animated sitcom centered around the Simpson family, known for its satirical take on American life."
        },
        {
          "title": "South Park",
          "image_url": "https://tse2.mm.bing.net/th?id=OIP.1umXMNcwTziLWu6p4QlRCQHaEK&pid=Api",
          "description": "A show that follows four boys in a Colorado town, known for its crude humor and satirical take on current events."
        },
          {
            "title": "Smiling Friends",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMjkxOWUzNmEtZTMyMC00Y2Y2LTk2OGUtZjQzNTc0NDg2NGQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "description": "Follows the quirky adventures of Charlie and Pim at Smiling Friends Inc., where their mission is to make people smile, tackling unexpectedly complex scenarios with humor."
          },
          {
            "title": "Hazbin Hotel",
            "image_url": "https://m.media-amazon.com/images/M/MV5BNmMyM2RkNDEtYzI0MS00ZGM3LWI1YzYtY2Y0YzEzMGY3NTlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "description": "Lucifer’s daughter embarks on a quest to reform Hell's denizens in this satirical take on infernal politics, featuring vibrant animation and dark humor."
          },
          {
            "title": "Batman: Caped Crusader",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTrw2XdJ2VIsbwJbTFNnc86zduLtD01zXNA&s",
            "description": "Revives the iconic hero with a dark, gritty, and atmospheric style reminiscent of noir cinema, exploring Bruce Wayne’s dual identity and his fight against Gotham’s darkness."
          },
          {
            "title": "Tuca & Bertie",
            "image_url": "https://m.media-amazon.com/images/M/MV5BYjhhYTBkOWEtODZkMC00NmRjLTkxMTYtMzJhOWQ5ZjYyMzc4XkEyXkFqcGc@._V1_.jpg",
            "description": "Follows two anthropomorphic bird friends navigating life's ups and downs, addressing themes of mental health, romantic relationships, and self-discovery."
          },
          {
            "title": "The Owl House",
            "image_url": "https://m.media-amazon.com/images/M/MV5BMWI2ZWQ3ZWItZjU2My00ZDg0LWIyMDEtNGQ1ZDdlMTVhZTg0XkEyXkFqcGc@._V1_.jpg",
            "description": "Concludes the adventures of Luz in the magical world, tying up character arcs and loose ends while remaining emotionally satisfying and inclusive."
          },
          {
            "title": "Happy Family USA",
            "image_url": "https://m.media-amazon.com/images/M/MV5BZGVkYTk1NDktNjYyNS00MTdlLWI4MGYtOTFjNDRiNGUwMmE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "description": "An animated adult comedy created by Ramy Youssef, exploring the modern Muslim-American experience through the lens of a teenage boy navigating post-9/11 America. The show blends magical realism with poignant social commentary and satirical musical numbers."
          },
          {
            "title": "Makeine: Too Many Losing Heroines!",
            "image_url": "https://m.media-amazon.com/images/S/pv-target-images/072edfd1cac3e2f32db31d4dcccbe7d1d8e46fcc5e6dfdb02eef6b5b68a1259d.jpg",
            "description": "An inventive mix of romantic comedy and commentary on the genre’s oldest tropes, following the relationship between three eccentric losing heroines and a high school boy who becomes their source of emotional support."
          },
          {
            "title": "KonoSuba: God's Blessing on This Wonderful World! 3",
            "image_url": "https://m.media-amazon.com/images/M/MV5BNTQ5NzJjMjgtNDliNC00YTdmLWJiOTQtYWRiMzY4OWU5NGQ3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "description": "The third season of the beloved isekai comedy, continuing the misadventures of Kazuma and his outlandish companions as they navigate new challenges and hilarious situations."
          }      
    ]

    function comediesdata(){
      mainthreediv.textContent=''
      comedies.forEach((m)=>
      {
          const comedydiv= document.createElement("div")
          comedydiv.classList.add('show')
          //const imgdisc = document.createElement("div")
          //imgdisc.classList.add(imgdisc)
          const comedyimg =document.createElement("img")
          comedyimg.classList.add('showimg')
          comedyimg.src= m.image_url
          comedyimg.alt= m.title
          const comedytitle = document.createElement("h2")
          comedytitle.textContent = m.title
          const comedydisc = document.createElement("p")
          comedydisc.textContent = m.description
          const comedybtn = document.createElement("button")
          comedybtn.classList.add('showbtn')
          comedybtn.textContent="Watch Now"
          //imgdisc.append(showimg,showdisc)
          comedydiv.append(comedytitle,comedyimg,comedybtn)
          mainthreediv.appendChild(comedydiv)
          
      })
  }
comediesdata()

comedydiv.addEventListener('click')