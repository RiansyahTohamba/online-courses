react dan immutable	kenapa immutable pada react penting? jadi original value pada variable nya tidak berubah. kenapa ini jadi penting?
immutable dibantu dengan spread operator	
pzn - immutable	https://www.youtube.com/watch?v=w-kv7ur253g
advantage immutable = tidak perlu locking data	
immutable harus menjadi top of mind ketika bekerja dengan reactjs	spread menjadi top of mind


# immutable di javascript
contoh yang diberikan https://www.youtube.com/watch?v=4LzcQyZ9JOU keren sekali.
javascript dibandingkan dengan functional language.
functional language memang punya konsep immutable yang sudah built-in di bahasanya.

sementara javascript bermasalah dengan konsep immutabity nya.

const scores = [10,12,41,23,423]
const newScores = scores.sort()

console.log(newScores)
console.log(scores)
newScores merupakah scores yg sudah diurut.
masalahnya, scores ikutan diurut juga.
jadi state lama nya hilang.

metafor immutability sama seperti "save as"
save as menghasilkan dokumen baru dibandingkan dengan mengoverride dokumen lama