class Ray {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(10, 0)
        this.vel.rotate(random(-90, 90))

        this.bounces = 0
        this.maxBounces = 1

        this.running = true

        this.points = [this.pos.copy()]
    }

    edges() {
        if (this.bounces < this.maxBounces) {
            if (this.pos.x < 0) {
                this.vel.x *= -1
                this.bounces++
            }

            if (this.pos.x > width) {
                this.vel.x *= -1
                this.bounces++
            }

            if (this.pos.y < 0) {
                this.vel.y *= -1
                this.bounces++
            }

            if (this.pos.y > height) {
                this.vel.y *= -1
                this.bounces++
            }
        } else {
            if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
                this.running = false
            }
        }
    }

    update() {
        if (this.running) {
            this.edges()
            this.pos.add(this.vel)
            this.points.push(this.pos.copy())
            console.log("running")
        }
    }

    render() {
        beginShape()
        for (let p of this.points) {
            vertex(p.x, p.y)
        }
        endShape()
    }
}