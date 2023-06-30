export class Result {
  constructor(public ok: boolean = false, public result: UrlResult) {}
}

export class UrlResult {
  constructor(public original_link: string, public full_short_link: string) {}
}
