function encode() {
  const inputText = document.getElementById('input-text').value;
  const outputText = document.getElementById('output-text');

  const mapping = {
                'Y': 'A',
                'X': 'B',
                'B': 'C',
                'Đ': 'D',
                'A': 'E',
                'Z': 'F',
                'C': 'G',
                'G': 'H',
                'E': 'I',
                'F': 'J',
                'H': 'K',
                'K': 'L',
                'L': 'M',
                'M': 'N',
                'I': 'O',
                'N': 'P',
                'P': 'Q',
                'Q': 'R',
                'R': 'S',
                'S': 'T',
                'O': 'U',
                'T': 'V',
                'J': 'W',
                'V': 'X',
                'U': 'Y',
                'W': 'Z',
                //2
                'y': 'a',
                'x': 'b',
                'b': 'c',
                'đ': 'd',
                'a': 'e',
                'z': 'f',
                'c': 'g',
                'g': 'h',
                'e': 'i',
                'f': 'j',
                'h': 'k',
                'k': 'l',
                'l': 'm',
                'm': 'n',
                'i': 'o',
                'n': 'p',
                'p': 'q',
                'q': 'r',
                'r': 's',
                's': 't',
                'o': 'u',
                't': 'v',
                'j': 'w',
                'v': 'x',
                'u': 'y',
                'w': 'z',
                //3
                'Ư':'Ă',
                'Ă':'Â',
                'D':'Đ',
                'Â':'Ê',
                'Ê':'Ô',
                'Ô':'Ơ',
                'Ơ':'Ư',
                //4
                'ư':'ă',
                'ă':'â',
                'd':'đ',
                'â':'ê',
                'ê':'ô',
                'ô':'ơ',
                'ơ':'ư',
                //5
                'Ỵ':'Á',
                'Ý':'À',
                'Ỳ':'Ả',
                'Ỷ':'Ã',
                'Ỹ':'Ạ',
                'Ạ':'É',
                'Á':'È',
                'À':'Ẻ',
                'Ả':'Ẽ',
                'Ã':'Ẹ',
                'Ẹ':'Í',
                'É':'Ì',
                'È':'Ỉ',
                'Ẻ':'Ĩ',
                'Ẽ':'Ị',
                'Ị':"Ó",
                'Í':"Ò",
                'È':"Ỏ",
                'Ỉ':"Õ",
                'Ĩ':"Ọ",
                'Ọ':"Ú",
                'Ó':"Ù",
                'Ò':"Ủ",
                'Ỏ':"Ũ",
                'Õ':"Ụ",
                'Ụ':"Ý",
                'Ú':"Ỳ",
                'Ù':"Ỷ",
                'Ủ':"Ỹ",
                'Ũ':"Ỵ",
                //6
                "ỵ": "á",
                "ý": "à",
                "ỳ": "ả",
                "ỷ": "ã",
                "ỹ": "ạ",
                "ạ": "é",
                "á": "è",
                "à": "ẻ",
                "ả": "ẽ",
                "ã": "ẹ",
                "ẹ": "í",
                "é": "ì",
                "è": "ỉ",
                "ẻ": "ĩ",
                "ẽ": "ị",
                "ị": "ó",
                "í": "ò",
                "ì": "ỏ",
                "ỉ": "õ",
                "ĩ": "ọ",
                "ọ": "ú",
                "ó": "ù",
                "ò": "ủ",
                "ỏ": "ũ",
                "õ": "ụ",
                "ụ": "ý",
                "ú": "ỳ",
                "ù": "ỷ",
                "ủ": "ỹ",
                "ũ": "ỵ",
                // 7
                "Ự": "Ắ",
                "Ứ": "Ằ",
                "Ừ": "Ẳ",
                "Ử": "Ẵ",
                "Ữ": "Ặ",
                "Ặ": "Ấ",
                "Ắ": "Ầ",
                "Ằ": "Ẩ",
                "Ẳ": "Ẫ",
                "Ẵ": "Ậ",
                "Ậ": "Ế",
                "Ấ": "Ề",
                "Ầ": "Ể",
                "Ẩ": "Ễ",
                "Ẫ": "Ệ",
                "Ệ": "Ố",
                "Ế": "Ồ",
                "Ề": "Ổ",
                "Ể": "Ỗ",
                "Ễ": "Ộ",
                "Ộ": "Ớ",
                "Ố": "Ờ",
                "Ồ": "Ở",
                "Ổ": "Ỡ",
                "Ỗ": "Ợ",
                "Ợ": "Ứ",
                "Ớ": "Ừ",
                "Ờ": "Ử",
                "Ở": "Ữ",
                "Ỡ": "Ự",
                // 8
                "ự": "ắ",
                "ứ": "ằ",
                "ừ": "ẳ",
                "ử": "ẵ",
                "ữ": "ặ",
                "ặ": "ấ",
                "ắ": "ầ",
                "ằ": "ẩ",
                "ẳ": "ẫ",
                "ẵ": "ậ",
                "ậ": "ế",
                "ấ": "ề",
                "ầ": "ể",
                "ẩ": "ễ",
                "ẫ": "ệ",
                "ệ": "ố",
                "ế": "ồ",
                "ề": "ổ",
                "ể": "ỗ",
                "ễ": "ộ",
                "ộ": "ớ",
                "ố": "ờ",
                "ồ": "ở",
                "ổ": "ỡ",
                "ỗ": "ợ",
                "ợ": "ứ",
                "ớ": "ừ",
                "ờ": "ử",
                "ở": "ữ",
                "ỡ": "ự",
                //9
                "9": "0",
                "0": "1",
                "1": "2",
                "2": "3",
                "3": "4",
                "4": "5",
                "5": "6",
                "6": "7",
                "7": "8",
                "8": "9",
  };
  
    let encodedText = '';
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      encodedText += mapping[char] || char;
    }
  
    outputText.value = encodedText;
    }