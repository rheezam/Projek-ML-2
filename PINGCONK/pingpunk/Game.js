const config = {
    type: Phaser.AUTO,
    width: 1669,
    height: 949,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let character;

function preload() {
    // Load backsound
    this.load.audio("backsound", "Assets/Sounds/backsound.mp3?v=" + new Date().getTime());

    // Load sprite sheet (ubah frameWidth dan frameHeight sesuai gambar kamu)
    this.load.spritesheet('congky', 'Assets/Sprites/congky_jump.png?v=' + new Date().getTime(), {
        frameWidth: 64, // <-- ubah sesuai ukuran 1 frame
        frameHeight: 64 // <-- ubah sesuai ukuran 1 frame
    });
}

function create() {
    // Mainkan backsound
    this.backsound = this.sound.add("backsound", {
        loop: true,
        volume: 0.5
    });
    this.backsound.play();

    // Tambahkan sprite karakter ke tengah layar
    character = this.add.sprite(200, 120, 'congky');

    // Buat animasi 'jump' dari frame 0 sampai 4
    this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('congky', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });

    // Mainkan animasi
    character.play('jump');
}

function update() {
    // Belum ada logika update tambahan
}
