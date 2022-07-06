var w4, windowsImg;
var bk1Image;
var s1, s2, s3, s4, swImage;
var g1, g2, g3, g1Image, g2Image, g3Image;
var civ1, civ1Image, civ2Image, e1, e1Image, e2Image;
var civiliang,enemyg;

var l1winpos

function preload() {
  // windowsImg = loadImage("Images/4Windows.png");
  bk1Image = loadImage("Images/PopArtBlueGrungeBrickWall.jpg");
  swImage = loadImage("Images/SingularWindow.png")
  g1Image = loadImage("Images/Pistol.png")
  civ1Image = loadImage("Images/Civ1.png")
  civ2Image = loadImage("Images/Civ2.png")
  e1Image = loadImage("Images/Enemy1.png")
  e2Image = loadImage("Images/Enemy2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // w4= createSprite(width/2,height/2)
  //w4.addImage(windowsImg)
  // w4.scale = 1.7;

civiliang = new Group()
enemyg = new Group()


  g1 = createSprite(width / 2, height - 160)
  g1.addImage(g1Image)
  g1.scale = 1;

  s1 = createSprite(190, height / 2)
  s1.addImage(swImage)
  s1.scale = 0.75;
  s1.depth = g1.depth

  s2 = createSprite(width / 2 - 200, height / 2)
  s2.addImage(swImage)
  s2.scale = 0.75;
  s2.depth = g1.depth

  s3 = createSprite(width / 2 + 185, height / 2)
  s3.addImage(swImage)
  s3.scale = 0.75;
  s3.depth = g1.depth

  s4 = createSprite(width - 210, height / 2)
  s4.addImage(swImage)
  s4.scale = 0.75;
  s4.depth = g1.depth

  l1winpos = [{ x: 190, y: height / 2 }, { x: width / 2 - 200, y: height / 2 }, { x: width / 2 + 185, y: height / 2 }, { x: width - 210, y: height / 2 }]

  /*
  civ1 = createSprite(192,height/2+8)
  civ1.addImage(civ1Image)
  civ1.scale = 0.82;
  civ1.depth = g1.depth
  */
  g1.depth = g1.depth + 1


}

function spawncivilians() {

  if (frameCount % 150 === 0) {
    var pos = random(l1winpos)
    civ1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: civ1.addImage(civ1Image);
        break;
      case 2: civ1.addImage(civ2Image);
        break;
      default: break;
    }
    civ1.scale = 0.87;
    //civ1.depth = g1.depth
    civ1.lifetime = 100

    civiliang.add(civ1)
  }

} 

function spawnenemys() {

  if (frameCount % 235 === 0) {
    var pos = random(l1winpos)
    e1 = createSprite(pos.x, pos.y)
    var rand = Math.round(random(1, 2))
    switch (rand) {
      case 1: e1.addImage(e1Image);
        break;
      case 2: e1.addImage(e2Image);
        break;
      default: break;
    }
    e1.scale = 0.9;
    //civ1.depth = g1.depth
    e1.lifetime = 100

    enemyg.add(e1)

  }

}

function draw() {

  background(180);
  image(bk1Image, 0, 0, width, height)

  g1.x = mouseX

  var r = Math.round(random(1,2))
  if (r === 1) {
    spawncivilians()
  } else {
    spawnenemys()
  }

  drawSprites();
}
