package ai

import "context"

type Provider interface {
	Name() string
	Generate(ctx context.Context, prompt string, jsonMode bool) (text string, tokens int, err error)
}
