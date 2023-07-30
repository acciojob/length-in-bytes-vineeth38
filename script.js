const byteSize = (str) => {
  // write your code here
	if (!inputString || inputString.length === 0) {
    return 0;
  }

  let totalSize = 0;
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    // For characters outside the ASCII range (128 and above), add 2 bytes (UTF-8 encoding).
    totalSize += charCode < 128 ? 1 : 2;
  }

  return totalSize;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
