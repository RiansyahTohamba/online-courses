


# react dan immutable.	
diambil dari meta developer conference.


immutable harus menjadi top of mind ketika bekerja dengan reactjs.	
maka penggunaan spread menjadi top of mind
keep immutable dibantu dengan spread operator pada react.


kenapa immutable pada react penting? 
jadi original value pada variable nya tidak berubah. kenapa ini jadi penting?



# pzn - elastic search
pzn - immutable	https://www.youtube.com/watch?v=w-kv7ur253g
advantage immutable = tidak perlu locking data	




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
save as menghasilkan dokumen baru dibandingkan dengan meng-override dokumen lama

# intermezzo
dulu sy berasa keren kalau punya device dengan multi core (i3, i5, i7, etc) 2 atau 4 core. padahal klo program yang sy pakai tidak menggunakan algoritma multi thread maka multi core itu jadi tidak bermanfaat juga hehe