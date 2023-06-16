











function capitalA(s) {  
  var pattern = /^[a-zA-Z\s]*[A]$/;
  return pattern.test(s);
 }

 describe("Test capitalA", ()=>{
  test("It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false ", () => {
      expect(capitalA("Hello world A")).toStrictEqual(true);

      expect(capitalA("Hello world")).toStrictEqual(false);

      expect(capitalA("Hello world a")).toStrictEqual(false);
  })
});

function ioEmail(email) {
  var pattern = /^[^\s.@]+@[^\s@]+\.io$/i;
  return pattern.test(email);
}

describe("Test ioEmail", () => {
  test("It should return true if the input is in email format that end with .io", () => {
      expect(ioEmail("example@example.io")).toStrictEqual(true);
      expect(ioEmail("ex@ample@example.io")).toStrictEqual(false);
      expect(ioEmail("ex.ample@example.io")).toStrictEqual(false);
      expect(ioEmail("example@example.gmail")).toStrictEqual(false);
  })
});




 function imagesSearcher(text) {
  var pattern = /(?:^|\s)(\w+\.(?:jpg|jpeg|png))(?=\s|$)/g;
  var matches = text.match(pattern);
  
  if (matches) {
    return matches.map(function(match) {
      return match.trim();
    });
  } else {
    return [];
  }
}

describe("Test imagesSearcher", () => {
  test("It should return all images names that end with jpg, jpeg and png extention", () => {
      expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual(['cat.png', 'dog.jpg', 'cow.jpeg']);
      expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
      expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. horse.gif Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore dolphin.pdf eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa mouse.tiff qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
  })
})




