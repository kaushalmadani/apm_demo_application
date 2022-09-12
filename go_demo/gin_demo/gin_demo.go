package gin_demo

import (
	"net/http"

	g "github.com/middleware-labs/golang-apm-gin/src/gin"

	"github.com/gin-gonic/gin"
)

func RunGinDemo() {
	// go traces.InitTracer("go-apm-demo-gin-server")
	r := gin.Default()
	r.Use(g.Middleware("go-apm-demo-gin-server"))
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.Run(":8070")
}
