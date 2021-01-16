// fungsi generate tabel
function generateTabel() {
    let inputTabel = parseInt(document.getElementById("inputTabel").value);
    generate();
    function generate() {
        // Generate Tabel Pertama
        table1();
        function table1() {
            // membuat kolom
            let column = '';

            for (let j = 0; j < inputTabel; j++) {
                column = column + "<td><input type='number' name='inputArray1' class='form-control text-center' value=''></td>";
            }

            // membuat row
            let row = '';

            for (let i = 0; i < inputTabel; i++) {
                row = row + `<tr>${column}</tr>`;
            }

            // hasil akhir
            let result = `<h4>Masukan Nilai 1<h4><table class='table mx-auto'>${row}</table>`;

            document.getElementById('isi').innerHTML = result;
        }

        //  Generate Tabel Kedua
        table2();
        function table2() {
            // membuat kolom
            let column = '';

            for (let j = 0; j < inputTabel; j++) {
                column = column + "<td><input type='number' name='inputArray2' class='form-control text-center' value=''></td>";
            }

            // membuat row
            let row = '';

            for (let i = 0; i < inputTabel; i++) {
                row = row + `<tr>${column}</tr>`;
            }

            // hasil akhir
            let result = `<h4>Masukan Nilai 2<h4><table class='table mx-auto'>${row}</table>`;

            document.getElementById('isi2').innerHTML = result;
        }

        // tombol untuk menghitung isi kedua tabel
        let btn = '';
        btn = btn + `<button class='btn-lg btn-primary' onclick='hitung()'>Hitung</button>`;
        document.getElementById('hitung').innerHTML = btn;
    }
    document.getElementById('hasil').hidden = true;
}

// fungsi untuk menghitung dan generate hasil penjumlahan 2 tabel diatas
function hitung() {
    document.getElementById('hasil').hidden = false;
    let inputTabel = parseInt(document.getElementById("inputTabel").value);

    let input1 = document.getElementsByName('inputArray1');
    let input2 = document.getElementsByName('inputArray2');

    // Menggabungkan input1
    let x = '';
    for (let i = 0; i < input1.length; i++) {
        let a = input1[i].value + ',';
        x = x + a;
    }
    
    // memecah array input1 menjadi potongan-potongan.
    let y = x.split(',');
    y.splice(-1, 1)
    for (let i = 0; i < y.length; i++) y[i] = + y[i];

    // Menggabungkan input2
    let x1 = '';
    for (let i = 0; i < input2.length; i++) {
        let a = input2[i].value + ',';
        x1 = x1 + a;
    }

    // memecah array input1 menjadi potongan-potongan.
    let y1 = x1.split(',');
    y1.splice(-1, 1)
    for (let i = 0; i < y1.length; i++) y1[i] = + y1[i];

    // Penyederhanaan
    let array1 = y;

    let array2 = y1;

    // Menambah Item Antar Array
    Array.prototype.SumArray = function (arr) {

        let sum = this.map(function (num, idx) {
            return num + arr[idx];
        });

        return sum;
    }

    // menambahkan tabel 1 dan 2
    let sum = array1.SumArray(array2);
    console.log(sum);

    hasil()
    function hasil() {
        // membuat kolom
        let column = '';

        for (let j = 0; j < inputTabel; j++) {
            column = column + `<td><input type='number'class='form-control hasil text-center' value='' readonly></td>`;
        }
        // membuat row
        let row = '';

        for (let i = 0; i < inputTabel; i++) {
            row = row + `<tr>${column}</tr>`;
        }

        // hasil akhir
        let result = `<h4 class='text-center'>Hasil</h4><table class='table mx-auto'>${row}</table>`;

        document.getElementById('hasil').innerHTML = result;


        // Menampilkan data
        let elements = document.querySelectorAll(".hasil");
        for (var i = 0; i < sum.length; i++) {
            let a = elements[i].value = sum[i];
            console.log(a)
        }
    }
}