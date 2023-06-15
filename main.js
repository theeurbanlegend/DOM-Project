const quoteBtn=document.querySelector("#newquote")
const quote=document.querySelector(".quote")
const quoter=document.querySelector(".quoter")

const quotes=[
    {
        quote:' “Every child is an artist; the problem is staying an artist when you grow up”',
        quoter:"Pablo Picasso"
    },

    {
        quote:' “Dont think about making art, just get it done. Let everyone else decide if its good or bad, whether they love it or hate it. While they are deciding, make even more art.”', 
        quoter:"Andy Warhol"
    },

    {
        quote:'“Art is a collaboration between God and the artist, and the less the artist does the better.” ',
        quoter: "Andre Gide"
    },
   {
        quote:'“Every artist was first an amateur.”' ,
        quoter:"Ralph Waldo Emerson"
   },
    {
        quote:'“I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.”', 
        quoter: "Georgia O’Keeffe"
   },
   {
        quote:'“Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.”',
        quoter:" Ray Bradbury"
   },
   {
        quote: '“Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.”' ,
        quoter: "Scott Adams"
    },
    {
        quote:'“The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So, write and draw and build and play and dance and live only as you can.”',
        quoter: "Neil Gaiman"
    },
   {
        quote:'“To create one’s own world takes courage.” ',
        quoter: "Georgia O’Keeffe"
   },
   {
        quote:'“Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.” ',
        quoter:"Georgia O’Keeffe"
   },
   {
        quote:
        '“If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don’t back down.”', 
        quoter:"Eminem"
   },
   {
        quote:'One thing I have learned is that I am not the owner of my talent, I am the manager of it.' ,
        quoter: "Madonna"
   },
   {
        quote:"If everything was perfect you would never learn and you would never grow. ",
        quoter: "Beyonce"
   },
   {
        quote:
        '“It’s like if you want something so badly go out and grab, just keep on doing it.”',
        quoter:"Ed Sheeran"
   },
   {
        quote:'My songs are a reflection of how I think and how I feel at that moment. But I’m conscious of the fact that artists have a responsibility before the masses and they have to take care of their words. ',
        quoter: "Shakira"
   },
   {
        quote:'“There are always going to be bad things. But you can write it down and make a song out of it’.”',
        quoter:" Billie Eilish"
   },
   {
        quote:'“The moment you start thinking about what other people and other artists think, you’re going to start writing like other people.”' ,
        quoter:"Rex Orange County"
   },
   {
        quote:'I don’t make music for eyes; I make music for ears. ',
        quoter: "Adele"
   },
   {
        quote:'“I don’t know where I’m going from here, but I promise it won’t be boring.” ',
        quoter:"David Bowie"
   },
   {
        quote:'“I used to get upset by people not understanding me, but I’ve made a career out of it now.”',
        quoter:"Ozzie Osbourne"
   },
   {
        quote:"“There is no must in art because art is free.” ",
        quoter: "Wassily Kandinsky"
   },
   {
        quote:'“Poor is the pupil who does not surpass his master.” ',
        quoter: "Leonardo da Vinci"
   },
   {
        quote:'“If people knew how hard I worked to get my mastery, it wouldn’t seem so wonderful at all.”' ,
        quoter: "Michelangelo"
   },
   {
        quote:'“One can have no smaller or greater mastery than mastery of oneself.”' ,
        quoter:"Leonardo da Vinci"
   },
   {
        quote:'“The aim of art is to represent not the outward appearance of things, but their inward significance.”',
        quoter: "Aristotle"
   },
   {
        quote:'“I want to touch people with my art. I want them to say, ‘he feels deeply, he feels tenderly.” ',
        quoter: "Vincent Van Gogh"
   },
   {
        quote:'“Art is a lie that makes us realize truth.” ',
        quoter: "Pablo Picasso"
   },
   {
        quote:'“An artist is not paid for his labor but for his vision.”' ,
        quoter: "James McNeill Whistler"
   },
   {
        quote:'“The artist’s world is limitless. It can be found anywhere, far from where he lives or a few feet away. It is always on his doorstep.” ',
        quoter: "Paul Strand"
   },
   {
        quote:'“It took me four years to paint like Raphael, but a lifetime to paint like a child.”' ,
        quoter: "Pablo Picasso"
   },
   {
        quote:'“Art is never finished, only abandoned.” ',
        quoter: "Leonardo Da Vinci"
   },
   {
        quote:'“If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.” ',
        quoter: "Émile Zola"
   },
   {
        quote:'“Learn the rules like a pro so you can break them like an artist.” ',
        quoter: "Pablo Picasso"
   },
   {
        quote:'“I invent nothing, I rediscover.” ',
        quoter: "Auguste Rodin"
   },
   {
        quote:
        '“I would rather die of passion than of boredom.” ',
        quoter: "Vincent van Gogh"
   },
   {
        quote:
        '“The chief enemy of creativity is ‘good’ sense.”', 
        quoter: "Pablo Picasso"
   },
   {
        quote:
        '“Creativity is magic. Don’t examine it too closely.”',
        quoter: "Edward Albee"
   },
   {
        quote:
        '“The world of reality has its limits; the world of imagination is boundless.” ',
        quoter: "Jean-Jacques Rousseau"
   },
   {
        quote:
        '“The job of the artist is always to deepen the mystery.” ',
        quoter: "Francis Bacon"
   },
   {
        quote:'“An artist cannot fail; it is a success to be one.” ',
        quoter: "Charles Horton Cooley"
   }
]

quoteBtn.addEventListener("click", ()=>{
    let random=Math.floor(Math.random()*quotes.length)
    let randomQuote=quotes[random]
    quote.innerText=randomQuote.quote
    quoter.innerText=randomQuote.quoter
    
})