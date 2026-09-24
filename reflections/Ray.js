class Ray {
    constructor(x, y, angle) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.fromAngle(angle).setMag(1)

        this.maxBounces = floor(random(4, 6))

        this.running = true

        this.points = [this.pos.copy()]
    }

    edges() {
        let bounced = false
        if (this.points.length < this.maxBounces) {
            if (this.pos.x < 0) {
                this.vel.x *= -1
                bounced = true
            }

            if (this.pos.x > width) {
                this.vel.x *= -1
                bounced = true
            }

            if (this.pos.y < 0) {
                this.vel.y *= -1
                bounced = true
            }

            if (this.pos.y > height) {
                this.vel.y *= -1
                bounced = true
            }
        } else {
            if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
                this.running = false
            }
        }
        return bounced
    }

    update() {
        if (this.running) {
            let bounced = this.edges()
            this.pos.add(this.vel)

            if (bounced) {
                this.points.push(this.pos.copy())
            }
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