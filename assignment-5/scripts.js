/* Package data and constructor objects */

// Package data array (simulated data source, such as JSON or database recordset)
var data = [
  {
    name: 'emmet',
    desc: 'Emmet is the number one code snippet tool.',
    author: 'emmetio',
    url: 'https://atom.io/packages/emmet',
    downloads: 1662209,
    stars: 2534,
    selector: 'p1'
  },
  {
    name: 'atom-beautify',
    desc: 'The atom-beautify package will clean up your code, and make everything more readable!',
    author: 'Glavin001',
    url: 'https://atom.io/packages/atom-beautify',
    downloads: 4228040,
    stars: 4541,
    selector: 'p2'
  },
  {
    name: 'Ask Stack',
    desc: 'Quickly get answers and code samples from Stack Overflow in Atom.',
    author: 'Chris911',
    url: 'https://atom.io/packages/ask-stack',
    downloads: 65665,
    stars: 277,
    selector: 'p3'
  },
 {
    name: 'Pigments',
    desc: 'A package to display colors in project and files.',
    author: 'abe33',
    url: 'https://atom.io/packages/pigments',
    downloads: 2296655,
    stars: 3524,
    selector: 'p4'
  },
  {
    name: 'Auto-Update-Packages for Atom',
    desc: 'Keeps all your Atom packages up to date!',
    author: 'yujinakayama',
    url: 'https://atom.io/packages/auto-update-packages',
    downloads: 63319,
    stars: 230,
    selector: 'p5'
  },
];

// (Atom) Package constructor function
function Package(data) {
  this.name = data.name;
  this.desc = data.desc;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;
  this.selector = data.selector;

  this.getFormattedDownloads = function () {
    return this.downloads.toLocalString();
  };

  this.getFormattedStars = function () {
    return this.stars.toLocalString();
  };
}

var writePackageInfo = function(package) {
  // Get reference to the DOM elements
  var selector = package.selector,
    nameEl = document.getElementById(selector + '-name'),
    descEl = document.getElementById(selector + '-description'),
    authorEl = document.getElementById(selector + '-author'),
    downloadsEl = document.getElementById(selector + '-downloads'),
    starsEl = document.getElementById(selector + '-stars');

  // Write package data to DOM elements
  nameEl.textContent = package.name;
  descEl.textContent = package.desc;
  authorEl.textContent = package.author;
  downloadsEl.textContent = package.downloads;
  starsEl.textContent = package.stars;
}

// Write package data for all the packages
var emmet = new Package(data[0]);
writePackageInfo(emmet);
var atomBeautify = new Package(data[1]);
writePackageInfo(atomBeautify);
