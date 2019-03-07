#!/usr/bin/env python

import argparse, os, pytablewriter, sys
from subprocess import call


ENGINE = "yourenginepath"
FEATURE_DIR = "features"

CRED = '\033[91m'
CGREEN = '\033[92m'
CBLUE = '\033[94m'
CEND = '\033[0m'
CBOLD = '\33[1m'

PASS = 0
FAIL = 0
FEATURE_NUMBER = 0

def test_feature (file,results):
    filename = os.path.splitext(os.path.basename(file))[0]
    filename = filename.split("_")
    filename = [fname.capitalize() for fname in filename]
    filename = " ".join(filename)

    if (call ([ENGINE, file])):
        global FAIL
        FAIL = FAIL + 1
        print '%s%s >> FAIL %s' % (CBOLD,CRED,CEND)
        results.append([filename,'<center>:x:'])
    else:
        global PASS
        PASS = PASS + 1
        print '%s%s >> PASS %s' % (CBOLD,CGREEN,CEND)
        results.append([filename,'<center>:heavy_check_mark:'])


def generate_md (feature,results,file):
    writer = pytablewriter.MarkdownTableWriter()
    writer.table_name = feature
    writer.header_list = ["Features","Result"]
    writer.value_matrix = results
    file.write(writer.dumps())


def main ():
    out = open("FEATURES.md","w")

    for dir in os.listdir(FEATURE_DIR):
        FEATURE_RESULTS = []
        dirname = dir.split("_")
        dirname = [dname.capitalize() for dname in dirname]
        dirname = " ".join(dirname)
        print  '\n%s%sCheckinf feature list: %s %s' % (CBOLD,CBLUE,dirname,CEND)
        for file in os.listdir(FEATURE_DIR + "/" + dir):
            global FEATURE_NUMBER
            FEATURE_NUMBER = FEATURE_NUMBER + 1
            print '%s >%s %s' % (CBOLD,CEND,file)
            file_path = FEATURE_DIR + "/" + dir + "/" + file
            test_feature(file_path,FEATURE_RESULTS)
        generate_md (dirname,FEATURE_RESULTS,out)
    out.close()
    print '%s%s\n====================%s' % (CBOLD,CBLUE,CEND)
    print '%s%sSUMMARY:%s\n' % (CBOLD,CBLUE,CEND)
    print '%s%sFEATURES TESTED: %s%s' % (CBOLD,CBLUE,FEATURE_NUMBER,CEND)
    print '%s%sPASS: %s%s' % (CBOLD,CGREEN,PASS,CEND)
    print '%s%sFAIL: %s%s' % (CBOLD,CRED,FAIL,CEND)
    print '%s%s====================%s' % (CBOLD,CBLUE,CEND)


if __name__ == '__main__':
    main()
