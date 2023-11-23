스토리지의 93% 사용됨 … 소진 시 스토리지가 부족해 파일을 만들거나 수정하거나 업로드할 수 없게 됩니다. 3개월 동안 100GB 스토리지를 월 ₩2,400 ₩600에 이용하세요.
/**
 * 2023.11.23 시나버스 shinahverse.kr
 * 화면에 명언 랜덤으로 출력하기
 */
const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

//문서에 있는 quote에 있는 첫번째 span
const quote = document.querySelector("#quote span:first-child");

//문서에 있는 quote에 있는 마지막 span
const author = document.querySelector("#quote span:last-child");

//문서에 랜덤으로 출력하기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;