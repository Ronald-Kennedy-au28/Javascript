
// Dot Notation:
// book.name
// or
// book.author

// Bracket Notation:
// book['name']
// or
// book['author']

for (var k in itemsToBuy){   //k here is a string
    prices.push(itemsToBuy[k].price)
}

