import * as P from "@effect/schema/Parser"
import * as Pretty from "@effect/schema/Pretty"
import * as S from "@effect/schema/Schema"
import * as Util from "@effect/schema/test/util"

describe.concurrent("Object", () => {
  describe.concurrent("instanceOf", () => {
    it("Guard", () => {
      const schema = S.instanceOf(Set)
      const is = P.is(schema)
      expect(is(new Set())).toEqual(true)
      expect(is(1)).toEqual(false)
      expect(is({})).toEqual(false)
    })

    it("Decoder", async () => {
      const schema = S.instanceOf(Set)
      await Util.expectParseSuccess(schema, new Set())
      await Util.expectParseFailure(schema, 1, `Expected an instance of Set, actual 1`)
      await Util.expectParseFailure(schema, {}, `Expected an instance of Set, actual {}`)
    })

    it("Pretty", () => {
      const schema = S.instanceOf(Set)
      const pretty = Pretty.to(schema)
      expect(pretty(new Set())).toEqual("{}")
    })
  })
})
