#!/usr/bin/env python3


def index_range(page, page_size):
    page_end = page * page_size
    page_start = page_end - page_size
    return (page_start, page_end)