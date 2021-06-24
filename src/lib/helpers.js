export const toSlug = function (str) {
	str = str.toLowerCase().replace(/<.+>/, ' ').replace(/\s+/, ' ');
	let c = {
		'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'jo', 'ж':'zh', 'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'shch', 'ъ':'', 'ы':'y', 'ь':'', 'э':'e', 'ю':'ju', 'я':'ja', ' ':'-', ';':'', ':':'', ',':'', '—':'-', '–':'-', '.':'', '«':'', '»':'', '"':'', "'":'', '@':'', '(':'', ')':'', '№':'n', '/':'-', '\\':'', '\?':'', '%':'', '\’': '-', '’': '-'
	};
	let newStr = new String();
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		newStr += ch in c ? c[ch] : ch;
	};
	return newStr;
};

export const imgFiles = function (filename) {
  return {
    full: filename,
    large: filename.replace(/.(?=[^.]*$)/, '@large.'),
    medium: filename.replace(/.(?=[^.]*$)/, '@medium.'),
    small: filename.replace(/.(?=[^.]*$)/, '@small.'),
    thumb: filename.replace(/.(?=[^.]*$)/, '@thumb.'),
  }
};

export const formatDate = function (date) {
  let monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  date = new Date(date);
  let d = date.getDate();
  let m = monthNames[date.getMonth()];
  let y = date.getFullYear();
  let h = ('0' + date.getHours()).slice(-2);
  let min = ('0' + date.getMinutes()).slice(-2);
  return {
    date: d + ' ' + m + ' ' + y + ' года',
    time: h + ':' + min
  };
};

// Dispatch event on click outside of node
export function clickOutside(node) {
  const handleClick = event => {
    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside', node))
    }
  };
	document.addEventListener('click', handleClick, true);
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
	}
}

// Focus on mount
export function focusOnMount(node) {
  node.focus();
}

// API response headers
export const apiRsponseHeaders = {
  'content-type': 'application/json; charset=utf-8',
};

// API response status
export const apiResponseStatus = function (data) {
  if (data && data.length > 0) {
    // OK
    return 200;
  } else if (data && data.length === 0) {
    // NOT FOUND
    return 404;
  } else if (!data) {
    // INTERNAL SERVER ERROR
    return 500;
  };
}

export const numSpace = function (num) {
  return num.toString().length > 4 ? num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') : num.toString();
};

export const yearFrom = function (year) {
	return new Date().getFullYear() > year ? year + ' — ' + new Date().getFullYear() : year;
};

export const addZero = function (num) {
  return num.toString().length < 2 ? '0' + num.toString() : num.toString();
};

export const formatPhone = function (phone) {
  return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
};

export const formatPhoneLink = function (str) {
  str = str.replace(/<.+>/, ' ').replace(/\s+/, ' ');
	let c = {
		'-':'', '(':'', ')':'', ' ':''
	};
	let newStr = new String();
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		newStr += ch in c ? c[ch] : ch;
	};
	return newStr;
};

export const getStarsText = (stars) => {
  let startsText = '';
  while (stars-- > 0) startsText += '*';
  return startsText;
};

export const arrayRandElement = function(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
